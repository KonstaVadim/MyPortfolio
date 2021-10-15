<template>
  <div id="portfolio">
    <div class="content">
      <panel :isBackgroundActive="false" :positionSmallBlock="'right'">
        <template v-slot:panelMain>
          <div class="content__container">
            <!-- Счетчик опыта работы -->
            <div class="experience-counter">Опыт работы: {{experienceCounter}}</div>
            
            <!-- Список работ -->
            <div class="list-jobs">
              <div
                class="list-jobs__item-container"
                v-for="(job, key) in jobs"
                :key="`job${key}`"
              >
                <!-- Заголовок с названием компании -->
                <div class="list-jobs__header">
                  <box-icon
                    class="btn-dropdown"
                    name="chevron-right"
                    @click="showDropdown(key)"
                    color="#4f4f4f"
                    :class="{ 'rotate-filter': keysDropdown.includes(key) }"
                  ></box-icon>
                  <div class="list-jobs__header-info">
                    <!-- Название компании -->
                    <span class="list-jobs__name-company">{{
                      job.nameCompany
                    }}</span>
                    <!-- Опыт работы -->
                    <span class="list-jobs__work-experience"
                      >С {{ job.dateStart }} по {{ job.dateEnd }}</span
                    >
                  </div>
                </div>

                <!-- Выпадающий список с информацией по работе -->
                <div
                  class="list-jobs__dropdown-list"
                  :class="{ 'show-dropdown': keysDropdown.includes(key) }"
                >
                  <!-- Информация о работе -->
                  <div
                    class="list-jobs__information-job"
                    v-for="(itemJob, indexItemJob) in job.informationJob"
                    :key="`${key}_${indexItemJob}`"
                  >
                    <!-- Заглавие пункта о работе -->
                    <div class="list-jobs__item-title">
                      {{ itemJob.paragraphTitle }}
                    </div>

                    <!-- Информация в пункте о работе -->
                    <ul class="list-jobs__item-information">
                      <li
                        v-for="(infoItemJob,
                        indexInfoIJ) in itemJob.itemInformation"
                        :key="`${key}_${indexItemJob}_${indexInfoIJ}`"
                      >
                        <span>
                          {{ infoItemJob }}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </panel>
    </div>

    <side-text :text="'ПОРТФОЛИО'" />
  </div>
</template>

<script>
const panel = () => import("../Panel.vue");
const sideText = () => import("../Side-text.vue");

export default {
  name: "Portfolio",
  components: {
    panel,
    sideText,
  },
  data() {
    return {
      keysDropdown: [],
      jobs: {
        bolid: {
          nameCompany: "ЗАО НВП Болид, г. Москва",
          dateStart: "10.2020",
          dateEnd: "н.в.",
          informationJob: [
            {
              paragraphTitle: "Должность",
              itemInformation: ["WEB-разработчик"],
            },
            {
              paragraphTitle: "Обязанности",
              itemInformation: [
                "Разработка web-интерфейса конфигурирования датчиков и устройств пожарной безопасности (журнал событий с виртуальным скроллом, формы с обновляемыми данными через Websocket)",
                "Доработка back-end части (регистрация через почту, защита от bruteforce, обновление прошивки датчиков)",
                "Рефакторинг кода и поддержание работоспособности систем",
              ],
            },
          ],
        },
        pfsz: {
          nameCompany: 'ООО "Профсоюз", г. Кемерово',
          dateStart: '04.201',
          dateEnd: '04.2020',
          informationJob: [
            {
              paragraphTitle: 'Должность',
              itemInformation: ['Front-end разработчик'],
            },
            {
              paragraphTitle: 'Обязанности',
              itemInformation: [
                'Разработка новых модулей и интегрирование готовых версток ("ОТ и ПБ", "Маршруты", "Анализ показателей дублирующего контроля газов")',
                'Рефакторинг кода и поддержание работоспособности ("Маршруты", "Анализ показателей дублирующего контроля газов")',
                'Верстка печатных форм различных документов',
                'Поддержание работоспособности схемы шахты (С#, Unity)',
                ],
            },
          ],
        },
      },
    };
  },
  computed: {
    // Счетчик опыта работы
    experienceCounter() {
      let keysJobs = Object.keys(this.jobs);
      let startJob = this.jobs[keysJobs[keysJobs.length - 1]];
      let endJob = this.jobs[keysJobs[0]];
      console.log(startJob, endJob);
      return 1
    }
  },
  methods: {
    // Показать выпадающий список
    showDropdown(key) {
      if (this.keysDropdown.includes(key)) {
        this.$delete(this.keysDropdown, this.keysDropdown.indexOf(key));
      } else {
        this.keysDropdown.push(key);
      }
    },
    // Показать все работы
    showAllJobs() {
      let keys = Object.keys(this.jobs);
      for (let i in keys) {
        // Используем небольшую задержку для отображения работ
        setTimeout(() => {
          this.keysDropdown.push(keys[i]);
        }, (+i + 1) * 200);
      }
    },
  },
  created() {
    this.showAllJobs();
  },
};
</script>

<style lang="scss" scoped>
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

#portfolio {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-right: 7%;
}

.content {
  position: relative;
  width: 100%;
  height: 85%;
  margin-right: 5%;
  background-color: var(--panel__main-block);

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 40px;
  }
}

.experience-counter {
  text-align: right;
  color: var(--secondary-text-color);
}

.list-jobs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  &__item-container {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    min-width: 50%;
  }

  &__header-info {
    display: flex;
    flex-direction: column;
  }

  &__name-company {
    font-size: 1.5rem;
  }

  &__work-experience {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
  }

  &__header {
    display: flex;
    align-items: center;
  }

  &__dropdown-list {
    margin: 5px 0 0 55px;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    border-left: 1px solid var(--border-color);
    padding-left: 10px;
  }

  &__item-information {
    margin-left: 30px;
  }

  &__item-title {
    font-size: 1.2rem;
    color: var(--secondary-text-color);
  }

  .btn-dropdown {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 15px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    background-color: var(--primary-text-color);

    &:hover {
      box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.3);
    }

    &:active {
      box-shadow: 0 3px 5px 0px rgba(0, 0, 0, 0.45);
    }
  }
}

.show-dropdown {
  max-height: 500px;
}

.rotate-filter {
  transform: rotate(90deg);
}
</style>

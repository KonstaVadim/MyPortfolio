<template>
  <div id="portfolio">
    <div class="content">
      <panel :isBackgroundActive="false" :positionSmallBlock="'right'">
        <template v-slot:panelMain>
          <div class="content__container">
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
                  <div class="list-jobs__name-company">
                    {{ job.nameCompany }}
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

    <side-text :text="''" />
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
          nameCompany: "ЗАО НВП Болид",
          dataStart: "11.11.1111",
          dataEnd: "11.11.2111",
          informationJob: [
            {
              paragraphTitle: "Должность",
              itemInformation: ["111111", "2222", "111133311"],
            },
            {
              paragraphTitle: "Обязаности",
              itemInformation: ["4444", "5555", "6666"],
            },
          ],
        },
        asd: {
          nameCompany: "ЗАО НВП Болид",
          dataStart: "11.11.1111",
          dataEnd: "11.11.2111",
          informationJob: [
            {
              paragraphTitle: "Должность",
              itemInformation: ["111111", "2222", "111133311"],
            },
            {
              paragraphTitle: "Обязаности",
              itemInformation: ["4444", "5555", "6666"],
            },
          ],
        },
        asd2: {
          nameCompany: "ЗАО НВП Болид",
          dataStart: "11.11.1111",
          dataEnd: "11.11.2111",
          informationJob: [
            {
              paragraphTitle: "Должность",
              itemInformation: ["111111", "2222", "111133311"],
            },
            {
              paragraphTitle: "Обязаности",
              itemInformation: ["4444", "5555", "6666"],
            },
          ],
        },
      },
    };
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
}

.content {
  position: relative;
  width: 100%;
  height: 85%;
  background-color: var(--panel__main-block);

  &__container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 20px 40px;
    text-align: center;
  }
}

.list-jobs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: initial;

  &__item-container {
    margin-top: 25px;
    min-width: 50%;
  }

  &__name-company {
    font-size: 1.2rem;
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

  .btn-dropdown {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 15px;
    border-radius: 4px;
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

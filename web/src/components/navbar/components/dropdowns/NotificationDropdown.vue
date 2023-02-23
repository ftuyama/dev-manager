<template>
  <va-dropdown class="notification-dropdown" position="bottom" :offset="[13, 0]">
    <template #anchor>
      <va-icon-notification
        class="notification-dropdown__icon"
        :class="{ 'notification-dropdown__icon--unread': !allRead }"
      />
    </template>
    <va-dropdown-content class="notification-dropdown__content pl-3 pr-3 pt-2 pb-2">
      <div class="notification-dropdown__item row pt-1 pb-1 mt-2 mb-2">
        Powered by:
      </div>
      <div
        v-for="notification in notificationsProxy"
        :key="notification.id"
        class="notification-dropdown__item row pt-1 pb-1 mt-2 mb-2"
        :class="{ 'notification-dropdown__item--unread': notification.unread }"
        @click="notification.unread = false"
      >
        <img
          v-if="notification.details.avatar"
          class="mr-2 notification-dropdown__item__avatar"
          :src="notification.details.avatar"
        />
        <span class="ellipsis" style="max-width: 85%">
          <a :href="notification.link">
            <span v-if="notification.details.name" class="text--bold">{{ notification.details.name }}</span>
          </a>
        </span>
      </div>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import VaIconNotification from '../../../icons/VaIconNotification.vue'

  const { t } = useI18n()

  interface INotification {
    link: string
    details: {
      name: string
      avatar: string
      type?: string
    }
    unread: boolean
    id: number
  }

  const props = withDefaults(
    defineProps<{
      notifications?: INotification[]
    }>(),
    {
      notifications: () => [
        {
          link: 'https://github.com/epicmaxco/vuestic-admin',
          details: { name: 'VuesticAdmin', avatar: 'https://avatars.githubusercontent.com/u/30595047?s=200&v=4' },
          unread: true,
          id: 1,
        },
        {
          link: 'https://vuestic.dev/introduction/overview',
          details: {
            name: 'VuesticUI',
            avatar: 'https://avatars.githubusercontent.com/u/30595047?s=200&v=4',
          },
          unread: true,
          id: 2,
        },
        {
          link: 'https://github.com/vuejs',
          details: { name: 'VueJs', avatar: 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4' },
          unread: true,
          id: 3,
        },
      ],
    },
  )
  const notificationsProxy = ref<INotification[]>([...props.notifications])

  const allRead = computed(() => {
    return notificationsProxy.value.every((notification) => !notification.unread)
  })

  function markAllAsRead() {
    notificationsProxy.value = notificationsProxy.value.map((notification) => ({
      ...notification,
      unread: false,
    }))
  }
</script>

<style lang="scss" scoped>
  .row {
    flex-wrap: nowrap !important;
  }
  .md6 {
    box-sizing: border-box;
  }

  .notification-dropdown {
    cursor: pointer;

    .notification-dropdown__icon {
      position: relative;
      display: flex;
      align-items: center;

      &--unread::before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;
        top: -0.5rem;
        // background-color: $brand-danger;
        height: 0.375rem;
        width: 0.375rem;
        margin: 0 auto;
        border-radius: 0.187rem;
      }
    }

    &__content {
      max-width: 20rem;
    }

    &__item {
      cursor: pointer;
      margin-bottom: 0.75rem;
      flex-wrap: nowrap;
      position: relative;

      &--unread {
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          height: 0.375rem;
          width: 0.375rem;
          margin: auto;
          border-radius: 0.187rem;
        }
      }

      &:hover {
        color: var(--va-primary);
      }

      &__avatar {
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        min-width: 1.5rem;
      }
    }

    .va-dropdown__anchor {
      display: inline-block;
    }
  }
</style>

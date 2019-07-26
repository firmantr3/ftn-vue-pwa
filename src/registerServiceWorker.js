/* eslint-disable no-console */

import { register } from 'register-service-worker'
import swal from 'sweetalert2'
import i18n from '@/plugins/i18n'

const notifyUserAboutUpdate = worker => {
  swal({
    type: 'question',
    title: i18n.t('update_available'),
    text: i18n.t('update_now'),
    reverseButtons: true,
    showCancelButton: true,
    confirmButtonText: i18n.t('ok'),
    cancelButtonText: i18n.t('cancel')
  }).then((result) => {
    if(result.value) {
      worker.postMessage({ action: 'skipWaiting' })
    }
  })
}

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    registrationOptions: { scope: SW_SCOPE },
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      notifyUserAboutUpdate(registration.waiting)
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

if ('serviceWorker' in navigator) {
  var refreshing
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (refreshing) return
    window.location.reload()
    refreshing = true
  })
}

import { library } from '@fortawesome/fontawesome-svg-core'
import Vue from 'vue'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { faUserClock } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
 
library.add(faHome)
library.add(faSignOutAlt)
library.add(faCalendarAlt)
library.add(faUserEdit),
library.add(faUserClock)
library.add(faClock)
library.add(faUserCircle)

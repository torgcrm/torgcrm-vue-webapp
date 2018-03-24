import {torgCRM} from '../plugins/axios'

export default {
  getProducts (cb) {
    torgCRM.get('orders').then(function (orders) {
      cb(orders)
    })
  }
}

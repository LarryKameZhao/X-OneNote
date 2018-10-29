import request from '@/helpers/request'
import { friendlyDate } from '@/helpers/util'
const URL = {
  GET: '/notes/trash',
  REVERT: '/notes/:noteId/revert',
  DELETE: '/notes/:noteId/confirm'
}

export default {
  getAll() {
    return new Promise((resolve, reject) => {
      request(URL.GET)
        .then(res => {
          res.data = res.data.sort((note1, note2) => note1.createdAt < note2.createdAt)
          res.data.forEach(note => {
            res.data.friendlyCreatedAt = friendlyDate(note.createdAt)
            res.data.friendlyUpdatedAt = friendlyDate(note.updatedAt)
          })
          resolve(res)
        }).catch(err => {
        reject(err)
      })
    })
  },
  deleteNote (noteId) {
    return request(URL.DELETE.replace(':noteId', noteId),'DELETE')
  },
  revertNote (noteId) {
    return request(URL.DELETE.replace(':noteId', noteId),'PATCH')
  }
}

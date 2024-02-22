/*
 * @Descripttion:
 * @version:
 * @Author: muyang
 * @Date: 2024-02-19 10:27:46
 * @LastEditors: muayng
 * @LastEditTime: 2024-02-19 10:28:00
 */
import mitt from 'mitt'

type Events = {
  'LayoutTabs:closeTab'?: string
  'LayoutTabs:setTabTitle': string
}

const EventBus = mitt<Events>()
export default EventBus

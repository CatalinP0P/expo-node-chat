import { Message } from './Message'
import { User } from './User'

export interface ChatItemProps {
  id: number
  user: User
  lastMessage: Message
}

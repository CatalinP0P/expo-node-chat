import { useEffect, useState } from 'react'
import { ChatItemProps } from '../types/ChatItem'
import chatsDummy from './chatsDummy.json'

export default function useChats() {
  const [chats, setChats] = useState<ChatItemProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = () => {
    const newChats: ChatItemProps[] = chatsDummy.map((chat) => {
      return {
        ...chat,
        lastMessage: {
          ...chat.lastMessage,
          sentAt: new Date(chat.lastMessage.sentAt),
        },
      }
    })
    
    setChats(newChats)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { chats, loading }
}

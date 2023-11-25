import { useEffect, useState } from 'react'
import { Message } from '../types/Message'
import conversationDummy from './conversationDummy.json'

export default function useConversation(id: number) {
  const [conversation, setConversation] = useState<Message[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = () => {
    setConversation(
      conversationDummy.map((conv) => {
        return { ...conv, sentAt: new Date(conv.sentAt) }
      }) as Message[],
    )
    setLoading(false)
  }

  useEffect(() => {
    console.log(id)
    fetchData()
  }, [])

  return { conversation, loading }
}

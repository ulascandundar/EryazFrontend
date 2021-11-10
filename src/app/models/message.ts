export interface Message{
    id:number
    senderId:number
    senderName:string
    recipientId:number
    recipientName:string
    text:string
    dateAdded:Date
    dataRead:Date
    isRead:boolean
}
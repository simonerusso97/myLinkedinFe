export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  birthDay: Date;
  password: string;
  // messageList: Message[];
  type: string;
}

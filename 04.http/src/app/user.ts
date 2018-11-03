export type UserRole = 'admin' | 'user' | 'supermod';
export interface User {
  id: number;
  name: string;
  role: UserRole;
  email: string;
  image?: string;
}

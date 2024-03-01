export type UpdateResponse = {
  message: string;
  status: number;
};

export type UpdateInput = {
  university?: string;
  description?: string;
  company?: string;
  address?: string;
  fullname?: string;
  phone?: string;
  email?: string;
  relationship?: number;
  dayOfBirth?: Date;
};

export interface Donation {
  _id: string;
  amount: number;
  comment?: string;
  user_id: string;
  timestamp: string;
}

export interface ProjectDetails {
  images: string[];
  text?: string;
}

export interface Project {
  _id: string;
  title: string;
  image?: string;
  description: string;
  goal: number;
  current_amount: number;
  end_date: Date;
  category: string;
}

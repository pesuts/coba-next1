export interface ProfileType {
  fullName: string;
  email: string;
  image?: string;
};

export interface ProfileProps { 
  profile?: ProfileType
}
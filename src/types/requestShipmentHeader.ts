export type BtnBack = {
  name: string;
  link: string;
};

export type Title = {
  text: string;
  serial: string;
};

export type Subtitle = {
  text: string;
  link: string;
};

export type RequestShipmentBtn = {
  id: number;
  name: string;
};

export type Status = {
  title: string;
  content: string;
  isSuccess: boolean;
};

export type RequestShipmentSumContent = {
  amount: string;
  duty: string;
};

export type Sum = {
  title: string;
  content: RequestShipmentSumContent[];
};

export type Content = {
  action?: string;
  caption?: string;
  code?: string;
  name?: string;
  link?: string;
};

export type Download = {
  title: string;
  content: Content[];
  fileName: string;
};

export type Message = {
  bold: string;
  normal: string;
};

export type RequestShipmentHeaderData = {
  btnBack: BtnBack;
  title: Title;
  subtitle: Subtitle;
  buttons: RequestShipmentBtn[];
  status: Status;
  sum: Sum;
  download: Download;
  message: Message;
  isEdited: boolean;
};

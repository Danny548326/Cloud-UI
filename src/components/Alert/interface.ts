

export interface AlertParameters {
  click: () => void;
 }


declare class AlertType {
  private text?: string;
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(parameters: AlertParameters) {
  }

}

export default AlertType;
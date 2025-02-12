import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './CmpWebPart.module.scss';

export interface ICmpWebPartProps {
}

export default class CmpWebPart extends BaseClientSideWebPart<ICmpWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.cmp }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}

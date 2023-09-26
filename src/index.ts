import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';
import {
  IDefaultFileBrowser
} from '@jupyterlab/filebrowser';
import { ITranslator } from '@jupyterlab/translation';

import { createSyncButton } from './button'; 

/**
 * Initialization data for the rdm-binderhub-jlabextension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'rdm-binderhub-jlabextension:plugin',
  description: 'JupyterLab extension for GakuNin RDM.',
  autoStart: true,
  requires: [IDefaultFileBrowser, ITranslator],
  activate: (
    app: JupyterFrontEnd,
    browser: IDefaultFileBrowser,
    translator: ITranslator,
  ) => {
    console.log('JupyterLab extension rdm-binderhub-jlabextension is activated!');
    const trans = translator.load('jupyterlab');
    const sync = createSyncButton(trans);
    browser.toolbar.addItem('sync_to_grdm', sync);
  }
};

export default plugin;

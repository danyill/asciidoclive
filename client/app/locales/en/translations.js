/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                           Copyright 2016 Chuan Ji                         *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export default {
  title: 'AsciiDocLIVE',
  titleSuffix: ' - AsciiDocLIVE',
  header: {
    open: 'Open',
    openHeader: 'Open from',
    save: 'Save',
    saveHeader: 'Save',
    saveAsHeader: 'Save as new file',
    settings: 'Settings',
    saving: 'Saving...',
    saved: 'Saved',
    saveError: 'Could not save document',
    renaming: 'Renaming...',
    renamed: 'Renamed',
    renameError: 'Could not rename document',
    help: 'Help',
    cheatsheet: 'AsciiDoc Cheatsheet',
    faq: 'FAQ',
    about: 'About'
  },
  defaultTitle: 'Untitled Document',
  defaultBody: '',
  storageTypePrefix: {
    dropbox: '[Dropbox] ',
    'google-drive': '[Google Drive] '
  },
  storageType: {
    dropbox: 'Dropbox',
    'google-drive': 'Google Drive'
  },
  edit: {
    reopen: {
      title: 'Open from {{storageType}}',
      prompt: 'Would you like to open the newly saved file from ' +
        '{{storageType}}?',
      ok: 'Open from {{storageType}}',
      cancel: 'Cancel'
    }
  },
  settings: {
    syncScroll: 'Sync Scrolling',
    theme: 'Editor Theme...',
    fontSize: 'Font Sizes...'
  },
  confirmClose: 'The document "{{title}}" has not been saved. ' +
    'If you leave this page, all your changes will be lost. ',
  modal: {
    close: 'Close',
    faq: {
      title: 'Frequently Asked Questions'
    },
    about: {
      title: 'About'
    },
    theme: {
      title: 'Select Editor Theme'
    },
    fontSize: {
      title: 'Change Font Sizes',
      editorFontSize: 'Editor Font Size',
      previewFontSize: 'Preview Font Size'
    }
  }
};

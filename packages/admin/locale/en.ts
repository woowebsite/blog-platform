import routers from '~/constants/routers';

export const en = {
  common: {
    topBar: {
      profileMenu: {
        profile: 'Basic information',
        logout: 'Log out',
      },
      report: 'Report',
    },
    menu: {
      settings: {
        title: 'Settings',
        configuration: 'General',
        changePassword: 'Change password',
        profile: 'Basic information',
        navigation: 'Navigation',
      },
      users: {
        title: 'Users',
        allUsers: 'All users',
        createUser: 'Create an user',
        authorized: 'Permission',
      },
      productBases: {
        title: 'Product bases',
        allProductBase: 'All Product bases',
        createProductBase: 'Create product base',
      },
      pages: {
        title: 'Pages',
        allPage: 'All pages',
        createPage: 'Create page',
      },
    },
    topbar: {
      report: 'Report',
    },
    validator: {
      required: 'Please input {field}',
    },
    notification: {
      success: {
        message: 'Successfully',
        save: 'Saved successfully',
        sent: 'Sent successfully',
        delete: 'Deleted successfully',
      },
      error: {
        message: 'Error',
      },
    },
    messages: {
      changePassword: {
        isValid: 'Current password is invalid',
      },
    },
    buttons: {
      discard: 'Discard',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      actions: 'Actions',
      more: 'More',
      cancel: 'Cancel',
      filter: 'Filter',
      create: 'Create',
      upload: 'Upload',
    },
    deleteModal: {
      title: 'Delete',
      content: 'Do you want to delete?',
    },
    userTable: {
      columns: {
        id: 'Id',
        name: 'Name',
        age: 'Age',
        image: 'Avatar',
        email: 'Email',
        phone: 'Phone',
        role: 'Role',
        createdAt: 'Created At',
      },
    },
    navigation: {
      fields: {
        id: 'Id',
        title: 'Title',
        link: 'Link',
      },
    },
    navigationTable: {
      columns: {
        id: 'Id',
        title: 'Title',
        link: 'Link',
      },
    },
    authorizedTable: {
      columns: {
        featureName: 'Feature',
        full: 'Full',
        create: 'Create',
        update: 'Update',
        delete: 'Delete',
        read: 'Read',
      },
    },
    productBaseTable: {
      columns: {
        id: 'Id',
        title: 'Title',
        createdAt: 'Created At',
      },
    },
    productBaseBasicForm: {
      label: {
        title: 'Title',
        description: 'Description',
        provider: 'Provider',
        thumbnails: 'Thumbnails',
        categories: 'Categories',
        tags: 'Tags',
      },
    },
    page: {
      fields: {
        id: 'Id',
        title: 'Title',
        description: 'Description',
        thumbnails: 'Thumbnails',
        publishDate: 'Publish date',
      },
    },
    userCreateform: {
      label: {
        name: 'Name',
        description: 'Description',
        image: 'Image',
        email: 'Email',
        role: 'Role',
      },
    },
    tableQuickEdit: {
      btnQuickEdit: 'Edit',
    },
    tableFilter: {
      tabFilter: {
        all: 'All',
      },
    },
    changePasswordForm: {
      label: {
        current: 'Current Password',
        password: 'New Password',
        confirmPassword: 'Confirm Password',
      },
    },
    socialConnect: {
      title: 'Social Network',
      connectToFacebook: 'Connected Facebook',
      connectToTwitter: 'Connected Twitter',
      connectToGoogle: 'Connected Google',
    },
  },
  '/login': {
    signin: {
      title: 'Sign In',
      noAccount: 'Did you have an account',
      placeholder: {
        email: 'Email',
        password: 'Password',
      },
      buttons: {
        login: 'Login',
        loginWithEmail: 'Login with Email',
        forgotPass: 'Forgot your password?',
      },
    },
  },
  '/users': {
    title: 'All users',
    subTitle: 'This is subtitle',
    pageHeader: {
      buttons: {
        create: 'Add user',
      },
    },
  },
  '/productbases': {
    title: 'Product Bases',
    subTitle: 'This is subtitle',
    pageHeader: {
      buttons: {
        create: 'Add new',
      },
    },
  },
  '/users/new': {
    title: 'Create an user',
  },
  [routers.pages.all]: {
    title: 'All pages',
  },
  [routers.pages.create]: {
    title: 'Create a page',
    pageHeader: {
      buttons: {
        allPage: 'All page',
      },
    },
  },
  '/pages/[id]': {
    title: 'Update a page',
    subTitle: 'Update a page after create',
    pageHeader: {
      buttons: {
        allPage: 'All page',
      },
    },
  },
  '/users/[id]': {
    title: 'Update user',
    pageHeader: {
      buttons: {
        save: 'Save',
      },
    },
    changePasswordBox: {
      title: 'Change password',
    },
    socialBox: {
      title: 'Social',
    },
  },
  '/user/albums': {
    title: 'All album',
    subTitle: 'This is subtitle',
    pageHeader: {
      buttons: {
        create: 'Add album',
      },
    },
    tableAccount: {
      columns: {
        id: 'Id',
        name: 'Name',
        age: 'Age',
        createdAt: 'Created At',
      },
    },
  },
  '/settings/profile': {
    title: 'Basic Information',
    changePassword: {
      title: 'Change Password',
    },
    socialBox: {
      title: 'Social Network',
    },
  },
};

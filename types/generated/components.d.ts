import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactContactos extends Schema.Component {
  collectionName: 'components_contact_contactos';
  info: {
    displayName: 'contactos';
    icon: 'shield';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    email: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.contactos': ContactContactos;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    Keywords: Schema.Attribute.String;
    MetaDescription: Schema.Attribute.Text;
    MetaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MetaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
    }
  }
}

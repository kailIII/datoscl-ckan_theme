import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit


class Egobcl_ThemePlugin(plugins.SingletonPlugin, toolkit.DefaultDatasetForm):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.IDatasetForm)

    # IConfigurer

    def update_config(self, config_):
      toolkit.add_template_directory(config_, 'templates')
      toolkit.add_public_directory(config_, 'public')
      toolkit.add_resource('fanstatic', 'egobcl_theme')

    def is_fallback(self):
      return True

    def package_types(self):
      return []

    def _modify_package_schema(self, schema):
      # schema.update({
      #   'tag_string': [toolkit.get_validator('not_empty'), toolkit.get_validator('tag_string_convert')]
      #   })
      schema.update({
        'url': [toolkit.get_validator('not_empty'), unicode]
        })
      schema.update({
        'maintainer': [toolkit.get_validator('not_empty'), unicode]
        })
      schema.update({
        'maintainer_email': [toolkit.get_validator('not_empty'), unicode],
        })
      return schema

    def create_package_schema(self):
      schema = super(Egobcl_ThemePlugin, self).create_package_schema()
      schema = self._modify_package_schema(schema)
      return schema

    def update_package_schema(self):
      schema = super(Egobcl_ThemePlugin, self).update_package_schema()
      schema = self._modify_package_schema(schema)
      return schema

    

    
    

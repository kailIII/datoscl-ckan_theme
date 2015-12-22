# datoscl-ckan_theme
Tema / Templates para el Portal de Datos Públicos (CKANext)

INSTALACION:
------------

Descargar el tema.

```
git clone https://github.com/e-gob/datoscl-ckan_theme.git
```

Luego, dentro del directorio del tema, ejecutar la instalación

```
cd datoscl-ckan_theme
python setup.py develop
```

Para finalizar, incluir el plugin en el archivo de configuración de CKAN (production.ini)
para esto, se debe añadir el plugin en línea

<i>
ckan.plugins = ... datoscl-ckan_theme
</i>

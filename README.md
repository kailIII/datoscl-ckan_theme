# datoscl-ckan_theme
Tema / Templates para el Portal de Datos P√∫blicos (CKANext)

INSTALACION:
------------

Descargar el tema.

```
git clone https://github.com/e-gob/datoscl-ckan_theme.git
```

Luego, dentro del directorio del tema, ejecutar la instalaci√n

```
cd datoscl-ckan_them
python setup.py develop
```

Para finalizar, incluir el plugin en el archivo de configuraci√n de CKAN (production.ini)
para esto, se debe a√adir el plugin en la linea

<i>
ckan.plugins = ... datoscl-ckan_theme
</i>

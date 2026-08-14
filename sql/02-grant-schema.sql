-- Asegura que lab_user pueda crear tablas en el esquema public.
-- Ejecutar como superusuario contra labs_db:
--   psql -U postgres -d labs_db -f sql/02-grant-schema.sql
--
-- Desde PostgreSQL 15 el esquema public pertenece a pg_database_owner y ya
-- no otorga CREATE a PUBLIC, asi que el dueño de la base normalmente hereda
-- el permiso. Esto lo deja explicito por si la base se creo de otra forma.

ALTER SCHEMA public OWNER TO lab_user;
GRANT USAGE, CREATE ON SCHEMA public TO lab_user;

-- Verificacion
\echo '--- Permisos del esquema public ---'
\dn+ public

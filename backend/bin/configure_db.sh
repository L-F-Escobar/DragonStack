#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb
# echo "dropdb"
createdb -U node_user dragonstackdb
# echo "creatre"
psql -U node_user dragonstackdb < ./bin/sql/generation.sql
# echo "dragonstackdb 1"
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql

psql -U node_user dragonstackdb < ./bin/sql/trait.sql

node ./bin/insertTraits.js

echo "dragonstackdb configured"

Relations

user has
name string
email string
password string

classname string allownull: true
teacher boolean init: false

npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string,classname:string,teacher:boolean

Sequense has
name string
color string

Seqarraystring string
Seqarrayinteger integer

userId integer

npx sequelize-cli model:generate --name sequencerhythm --attributes name:string,color:string,seqritme:string,userId:integer

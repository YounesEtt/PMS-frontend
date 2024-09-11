export class User {

  userId : number ;
  teId : string;
  identifier: string;
  userName : string;
  email : string;
  nPlus1 : string;
  backUp : string;
  role : string;
  departementId : number ;
  plantId?: number[]; 
  constructor(
    userId : number = 0,
    teId : string = '' ,
    userName : string = '',
    email : string = '',
    nPlus1 : string = '',
    backUp : string = '',
    role : string = '',
    departementId : number = 0,
    identifier: string= '',
    plantId: number[] = [],
  ){
    this.userId = userId;
    this.teId = teId;
    this.userName = userName;
    this.email = email;
    this.nPlus1 = nPlus1;
    this.backUp = backUp;
    this.role = role;
    this.departementId = departementId;
    this.identifier=identifier;
    this.plantId = plantId;
  }

 }

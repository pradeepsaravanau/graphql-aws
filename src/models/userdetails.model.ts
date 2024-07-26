import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';

enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

@modelOptions({ schemaOptions: { timestamps: true } })
class User {
  // @prop({ required: true, unique: true })
  // public user_id!: number;

  @prop({required: true})
  public password!: string;

  @prop({ required: true })
  public user_name!: string;

  @prop({ required: true, unique: true })
  public phone_number!: string;

  @prop({ unique: true })
  public email?: string;

  @prop()
  public dob?: Date;

  @prop({ required: true, enum: Gender })
  public gender!: Gender;

  @prop({ required: true, ref: () => User })
  public created_by_id!: Ref<User>;

  @prop({ ref: () => User })
  public updated_by_id?: Ref<User>;

  @prop({ default: 0 })
  public books_borrowed_count!: number;
}

const UserModel = getModelForClass(User);
export { User, UserModel, Gender };

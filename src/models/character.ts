import { Schema } from "mongoose";

const character = new Schema({
  userId: Number,
  classId: Number,
  raceId: Number,
  ethicsId: Number,
  morality: Number,
  backgroundId: Number,
  name: String,
  proficiencyBonus: Number,
  maxHp: Number,
  currentHp: Number,
  level: Number,
  armorClass: Number,
  speed: Number,
  initiative: Number,
  experience: Number,
});

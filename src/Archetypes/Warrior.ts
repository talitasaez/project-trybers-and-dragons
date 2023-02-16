import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static _archetypeInstance = 0;

  constructor(name: string) {
    super(name);
    Warrior._archetypeInstance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeInstance;
  }
}
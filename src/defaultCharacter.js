export default {
  name: 'New Character',
  player: '',
  race: '',
  classes: [],
  background: '',
  alignment: '',
  xp: 0,
  proficiencyBonus: '+2',
  stats: {
    hitPoints: {
      max: 10,
      current: 10,
    },
    hitDice: {
      total: '1d8',
      used: '',
    },
    deathSaves: {
      successes: 0,
      failures: 0,
    },
    armorClass: {
      base: 10,
      bonus: '0',
    },
    speed: 30,
    initiative: 0,
  },
  abilities: [
    {
      name: 'str',
      proficient: false,
      base: 10,
      bonus: '0',
    },
    {
      name: 'dex',
      proficient: false,
      base: 10,
      bonus: '0',
    },
    {
      name: 'con',
      proficient: false,
      base: 10,
      bonus: '0',
    },
    {
      name: 'int',
      proficient: false,
      base: 10,
      bonus: '0',
    },
    {
      name: 'wis',
      proficient: false,
      base: 10,
      bonus: '0',
    },
    {
      name: 'cha',
      proficient: false,
      base: 10,
      bonus: '0',
    },
  ],
  skills: [
    {
      name: 'acrobatics',
      ability: 'dex',
      proficient: false,
    },
    {
      name: 'animal handling',
      ability: 'wis',
      proficient: false,
    },
    {
      name: 'arcana',
      ability: 'int',
      proficient: false,
    },
    {
      name: 'athletics',
      ability: 'str',
      proficient: false,
    },
    {
      name: 'deception',
      ability: 'cha',
      proficient: false,
    },
    {
      name: 'history',
      ability: 'int',
      proficient: false,
    },
    {
      name: 'insight',
      ability: 'wis',
      proficient: false,
    },
    {
      name: 'intimidation',
      ability: 'cha',
      proficient: false,
    },
    {
      name: 'investigation',
      ability: 'int',
      proficient: false,
    },
    {
      name: 'medicine',
      ability: 'wis',
      proficient: false,
    },
    {
      name: 'nature',
      ability: 'int',
      proficient: false,
    },
    {
      name: 'perception',
      ability: 'wis',
      proficient: false,
    },
    {
      name: 'performance',
      ability: 'cha',
      proficient: false,
    },
    {
      name: 'persuasion',
      ability: 'cha',
      proficient: false,
    },
    {
      name: 'religion',
      ability: 'int',
      proficient: false,
    },
    {
      name: 'sleight of hand',
      ability: 'dex',
      proficient: false,
    },
    {
      name: 'stealth',
      ability: 'dex',
      proficient: false,
    },
    {
      name: 'survival',
      ability: 'wis',
      proficient: false,
    },
  ],
}

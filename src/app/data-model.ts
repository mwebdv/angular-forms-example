export class Hero {
  constructor(
    public id: number = 0,
    public name: string = '',
    public addresses: Address[],
    public power: string
  ) {}
}

export const POWERS = ['Really Smart', 'Super Flexible',
'Super Hot', 'Weather Changer'];


export class Address {
    street = '';
    city = '';
}

export const heroes: Hero[] = [
    {
      id: 1,
      name: 'Whirlwind',
      addresses: [
        {street: '123 Main',  city: 'Anywhere'},
        {street: '456 Maple', city: 'Somewhere'},
      ],
      power: POWERS[0]
    },
    {
      id: 2,
      name: 'Bombastic',
      addresses: [
        {street: '789 Elm',  city: 'Smallville'},
      ],
      power: POWERS[2]
    },
    {
      id: 3,
      name: 'Magneta',
      addresses: [ ],
      power: POWERS[3]
    }
  ];

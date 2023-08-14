
// Returns a random DNA base
const dnaBases = ['A', 'T', 'C', 'G'];

const returnRandBase = () => {
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Factory function 
const pAequorFactory = (number, strand) => {
  return {
    _specimenNum: number,
    _dna: strand,

    //getters
    get dna() {
      return this._dna;
    },
    get specimenNum() {
      return this._specimenNum;
    },

    //Mutates a single base in the organism's DNA strand.
    mutate() {
      //Chooses base to be mutated
      mutPlace = Math.floor(Math.random() * 15);
      //Creates Mutation
      const randMut = () => {
        Math.floor(Math.random() * 4);
        let pick = dnaBases[randMut];
      }
      //Run mutator until a mutation occurs
      let mutation = randMut();
      while (mutation === this._dna[mutPlace]) {
        mutation = randMut();
      }
      //Place mutation
      this._dna[mutPlace] = mutation;
    },

    //Compare organism's DNA to another's (Returns percentage)
    compareDNA(organism) {
      let index = 0;
      let common = 0;
      let pass = organism._dna;

      pass.forEach(base => {
        if (base === this._dna[index]) {
          common++;
        }
      });

       return Math.floor((common / 15) * 100);
    },

    //Checks to see if the organism has atleast 60% of C or G bases.
    willLikelySurvive() {
      let count = 0;
      this._dna.forEach(base => {
        if (base === 'C' || base === 'G') {
          count++;
        }
      });
      return (count >= 9);
    }
  }
}


//Array to store the organisms
let community = [];

//Fills the community array with 30 organisms.
for (let i = 0; i < 30; i++) {
  community.push(pAequorFactory(i + 1, mockUpStrand()));
}


//Testcase:
const testCase = () => {
  let organism1 = pAequorFactory(1, mockUpStrand());
  let organism2 = pAequorFactory(2, mockUpStrand());

  console.log(`The two organisms share ${organism1.compareDNA(organism2)}% DNA`);
  console.log(`Will the organism likley survive: ${organism1.willLikelySurvive()}`);
}


testCase();


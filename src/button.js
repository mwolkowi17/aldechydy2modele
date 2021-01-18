import { tytul, tytulobj } from './loadingModule';

export const buttonChange = document.querySelector("#d");

export const buttonClick = () => {
    if (tytul === 'aldechydy_772.mtl') {
        tytul = 'aldechydy_772_b4.mtl';
        tytulobj = 'aldechydy_772_b4.obj';
    }
    else if (tytul ==='aldechydy_772_b4.mtl' )
     {
        tytul = 'aldechydy_772.mtl';
        tytulobj = 'aldechydy_772.obj';
    }

}
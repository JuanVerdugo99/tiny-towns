var resources = ['Madera','Trigo','Ladrillo','Vidrio','Piedra'];

var blues = [
    {
        name: 'img/cottage.jpg',
        description: 'Los cottages no alimentado se dejan en el tablero pero no puntúan por sí mismos. Otros edificios como los Wells, tratan a los Cottages, tanto alimentados como no, del mismo modo. Los puedes construir aunque no tengas un edificio rojo'
    }]


var reds = [
    {
        name: 'img/farm.jpg',
        description: 'Farms alimentan a  4 en cualquier lugar del tablero'
    },
    {
        name: 'img/granary.jpg',
        description: 'Granaries solo alimentan en los 8 huecos que rodean al recuadro (arriba, abajo, izquierda, derecha y diagonal) a un maximo de 8'
    },
    {
        name: 'img/greenhouse.jpg',
        description: 'Greenhouse alimentan a 1 grupo contiguo que estén adyacentes (arriba, abajo, izquierda y derecha) entre ellos. Este grupo no tiene que estar adyacente a una Greenhouse'
    },
    {
        name: 'img/orchard.jpg',
        description: 'Orchard siempre alimentarán a un máximo de 6 no importa donde estén colocados'
    }]

var grays = [
    {
        name: 'img/fountain.jpg',
        description: 'Fountains no pueden puntuar más de 2 VP. Adyacente se refiere arriba, abajo, izquierda y derecha,NO diagonal'
    },
    {
        name: 'img/millstone.jpg',
        description: 'Millstones no pueden puntuar más de 2 VP, incluso si están adyacentes a multiples edificios rojos O edificios amarillos'
    },
    {
        name: 'img/shed.jpg',
        description: 'Sheds no están restringidos a ser colocados en los 2 recuadros en los que están sus recursos cuando se construyen, pueden colocarse en cualquier espacio vacío del tablero'
    },
    {
        name: 'img/well.jpg',
        description: 'Adyacente se refiere a arriba, abajo, izquierda y derecha, no diagonal. Los Cottage alimentados y sin alimentar puntúa 1 VP'
    }]

var oranges = [
	{
		name: 'img/abbey.jpg',
		description: 'Abbeys les gusta estar aisladas. Si una Abbey está adyacente (arriba, abajo, izquierda y derecha) a uno de edificios verdes, amarillos o negros, vale 0 VP'
	},
	{
		name: 'img/chapel.jpg',
		description: 'Puntúa Chapels individualmente. Una ciudad con 3 Cottage alimentadas y un Cottage sin alimentar hará que cada Chapel valga 3 VP. (Las Chapels no dan VP por Cottage sin alimentar)'
	},
	{
		name: 'img/cloister.jpg',
		description: 'Cloisters no colocados en una esquina seguirán puntuando 1 VP por cada Cloister situado en esquina. El máximo que un Cloister puede puntuar es 4 VP'
	},
	{
		name: 'img/temple.jpg',
		description: 'Temples valen 0 VP si no están adyacentes al menos 2 Cottage'
    }]
    
var greens = [
    {
        name:'img/almshouse.jpg',
        description:'La puntuación máxima de Almshouse es 26 VP. Si construyes más de 6 Almshouses, la puntuación total de Almshouse sigue siendo 26 VP',
    },
    {
        name:'img/feasthall.jpg',
        description:'Solo valen los Feast Halls 2 VP'
    },
    {
        name:'img/tavern.jpg',
        description:'Taverns puntúan como grupo. Por ejemplo, 4 Taverns valen 14 VP en totla (pueden estar en cualquier sitio del tablero). A partir de la 5ta Tavern construida, la puntuación de Taverns no se incrementa'
    }]

var yellows = [
    {
        name:'img/bakery.jpg',
        description:'Adyacente se refiere a arriba, abajo, izquierda y derecha, no diagonal. 3 VP por cada edificio rojo o negro adyacente'
    },
    {
        name:'img/market.jpg',
        description:'Markets puntúan por fila o por columna, pero no ambas. Los Markets siempre puntúan 1 VP por sí mismos además de por otros Markets en la misma fila o columna, hasta un máximo de 4 VP'
    },
    {
        name:'img/tailor.jpg',
        description:'Tailors que no se hayan construido en los 4 recuadros centrales siguen valiendo 1 VP más 1 VP por cada Tailor en los 4 recuadros centrales. Lo máximo que un Tailor puede puntúar en total 5'
    },
    {
        name:'img/theater.jpg',
        description:'La puntuación de un Theater es el número total de tipos de edificio únicos además del Theater que comparten fila o Columna con ese Theater, por un máximo de 6 VP Si hay edificios del mismo tipo en la misma fila y columna del Theater, ese tipo de edificio sólo cuenta una vez para la puntuación del Theater. El monumento edificio cuenta como un tipo de edificio único (a menos que sea Barrett Castle, que cuenta como 2 Cottages)'
    }]

var blacks = [
    {
        name:'img/factory.jpg',
        description:'Puedes elegir que varias Factories guarden el mismo recurso, pero no te proporciona ninguna ventaja'
    },
    {
        name:'img/tradingpost.jpg',
        description:'Trading Posts pueden usarse en el patrón de un edificio futuro. Cuando construyes un edificio que usó una Trading Post de ese recuadro. Puedes usar varias Trading Posts para construir un edificio, pero debe utilizarse al menos 1 recurso que no sea Trading Post'
    },
    {
        name:'img/warehouse.jpg',
        description:'Con un Warehouse puedes almacenar hasta 3 recursos poniendo los cubos en el edificio. Cuando otro jugador nombre un recurso que no quieras, coloca el recurso en tu Warehouse. Cuando hagas esto, puedes quitar un recurso de tu Warehouse y colocarlo en un recuadro vacío de tu tablero. Nunca se puede quitar un recurso en el Warehouse sin poner un nuevo recurso. Como resultado, el número de recursos en un Warehouse nunca decrecerá'
    }]

var pinks = [
    {
        name: 'img/architectsguild.jpg',
        description: 'Puede no hacer uso de la hablidad del Architec\'s Guild, pero no puedes usarla luego. Los edificios que coloques pueden ser del mismo tipo o de 2 tipos diferentes. No puedes cambiar edificios por monumentos, ya que estos últimos no se encuentran en la reserva general'
    },
    {
        name: 'img/archiveofthesecondage.jpg',
        description: 'No importa dónde estén colocados los edificios para la puntuación de este monumento'
    },
    {
        name: 'img/barrettcastle.jpg',
        description: 'Para toda la puntuación referente a edificios, Barrett Castle cuenta como 2 Cottages, no como un monumento rosa'
    },
    {
        name: 'img/cathedralofcaterina.jpg',
        description: 'Esto se aplica sólo a recuadros vacíos de tu tablero'
    },
    {
        name: 'img/groveuniversity.jpg',
        description: 'No puedes colocar un monumento después de contruir Grove University ya que los monumentos no están en la reserva general'
    },
    {
        name: 'img/mandraspalace.jpg',
        description: 'Adyacente se refiere a arriba, abajo, izquierda y derecha, no diagonal'
    },
    {
        name: 'img/shrineoftheeldertree.jpg',
        description: 'Si este es el 7to edificio o posterior que construyes, sigue puntuando solo 8 VP'
    },
    {
        name: 'img/silvaforum.jpg',
        description: 'Un grupo contiguo se refiere a edificios que están adyacentes entre sí'
    },
    {
        name: 'img/thestarloom.jpg',
        description: 'Puntúas todos los puntos por 1ro 2do o 3ro si completas tu ciudad en la misma ronda (empatando con) que otro jugador'
    },
    {
        name: 'img/statueofthebondmaker.jpg',
        description: 'Los recursos en los recuadros que contienen Cottage no pueden usarse para construir edificios'
    },
]

//AZULES

var blueH = /-.T..-BG..-|-..T.-.BG.-|-...T-..BG-|-..T.-..GB-|-.T..-.GB.-|-T...-GB..-|-TG..-.B..-|-.TG.-..B.-|-..TG-...B-|-..GT-..B.-|-.GT.-.B..-|-GT..-B...-|-BG..-....-....-.T..-|-.BG.-....-....-..T-|-..BG-....-....-...T-|-TG..-....-....-.B...-|-BG..-....-....-.T..-|-.BG.-....-....-..T.-|-..BG-....-....-...T-|-G..B-....-....-T...-|-T...-G..B-|-GB..-T...-|-.GB.-.T..-|-..GB-..T.-|-B..G-...T-|-T...-....-....-GB..-|-.T..-....-....-.GB.-|-..T.-....-....-..GB-|-...T-....-....-B..G-|-G..T-B...-|-T..G-...B-|-B...-....-....-GT..-|-.B..-....-....-.GT.-|-..B.-....-....-..GT-|-...B-....-....-T..G-/;

//GRISES
var graysH = /-SW..-|-.SW.-|-..SW-|-W..S-|-WS..-|-.WS.-|-..WS-|-S..W-|-W...-S...-|-.W..-.S..-|-..W.-..S.-|-...W-...S-|-S...-W...-|-.S..-.W..-|-..S.-..W.-|-...S-...W-|-W...-....-....-S...-|-.W..-....-....-.S..-/;

//ROJAS
var farmH = /-TT..-WW..-|-.TT.-.WW.-|-..TT-..WW-|-WW..-TT..-|-.WW.-.TT.-|-..WW-..TT-|-TT..-....-....-WW..-|-.TT.-....-....-.WW.-|-..TT-....-....-..WW-|-..TT-..WW-|-WW..-....-....-TT..-|-.WW.-....-....-.TT.-|-..WW-....-....-..TT-|-T..T-W..W-|-W..W-T..T- /;

var granaryH = /-TT..-WB..-|-.TT.-.WB.-|-..TT-..WB-|-TB..-TW..-|-.TB.-.TW.-|-..TB-..TW-|-BW..-TT..-|-.BW.-.TT.-|-..BW-..TT-|-WT..-BT..-|-.WT.-.BT.-|-..WT-..BT-|-T..T-B..W-|-T..W-T..R-|-W..B-T..T-|-B..T-W..T-|-WB..-....-....-TT..-|-.WB.-....-....-.TT.-|-..WB-....-....-..TT-|-WT..-....-....-BT..-|-.WT.-....-....-.BT.-|-..WT-....-....-..BT-|-BW..-....-....-TT..|-.BW.-....-....-.TT.-|-..BW-....-....-..TT-|-TB..-....-....-TW..-|-.TB.-....-....-.TW.-|-..TB-....-....-..TW-/ ;

var greenhouseH = /-TG..-WW..-|-.TG.-.WW.-|-..TG-..WW-|-WW..-GT..-|-.WW.-.GT.-|-..WW-..GT-|-GW..-TW..-|-.GW.-.TW.-|-..GW-..TW-|-WT..-WG..-|-.WT.-.WG.-|-..WT-..WG-|-G..T-W..W-|-WW..-....-....-TG...-|-.WW.-....-....-.TG..-|-..WW.-....-....-..TG.-|-..WW-....-....-..TG-/;

var orchardH = /-ST..-TW..-|-.ST.-.TW.-|-..ST-..TW-|-TS..-WT..-|-.TS.-.WT.-|-..TS-..WT-|-WT..-TS..-|-.WT.-.TS.-|-..WT-..TS-|-TW..-ST..-|-.TW.-.ST.-|-..TW-..ST-|-T..S-W..T-|-S..T-T..W-|-T..W-S..T-|-W..T-T..S-|-TW..-....-....-ST..-|-.TW.-....-....-.ST.-|-..TW-....-....-..ST-|-TS..-....-....-WT..-|-.TS.-....-....-.WT.-|-..TS-....-....-..WT-|-WT..-....-....-TS..-|-.WT.-....-....-.TS.-|-..WT-....-....-..TS-|-TW..-....-....-ST..-|-.TW.-....-....-.ST.-|-..TW-....-....-..ST-/;

//NARANJAS
var abbeyH = /-..G.-BSS.-|-...G-.BSS-|-G...-S.BS-|-.G..-SS.B-|-B...-S...-SG..-|-.B..-.S..-.SG.-|-..B.-..S.-..SG-|-...B-...S-G..S-|-SSB.-G...-|-.SSB-.G..-|-B.SS-..G.-|-SB.S-...G-|-GS..-.S..-.B..-|-.GS.-..S.-..B.-|-..GS-...S-...B-|-S..G-S...-B...-|-BSS.-....-....-..G.-|-.BSS-....-....-...G-|-S.BS-....-....-G...-|-SS.B-....-....-.G..-|-S...-SG..-....-B...-|-.S..-.SG.-....-.B..-|-..S.-..SG-....-..B.-|-...S-G...S-..S.-...B-|-SG..-....-B...-S...-|-.SG.-....-.B..-.S..-|-..SG-....-..B.-..S.-|-G..S-...-...B-...S-|-G...-....-....-SSB.-|-.G..-....-....-.SSB-|-..G.-....-....-B.SS-|-...G-....-....-SB.S-|-.S..-.B..-....-GS..-|-..S.-..B.-....-.GS.-|-...S-...B-....-..GS-|-S...-B...-....-S..G-|-.B..-....-GS..-.S..-|-..B.-....-.GS.-..S.-|-...B-....-..GS-...S-|-B...-....-S..G-S...-/;

var chapelH = /-..G.-SGS.-|-...G-.SGS-|-G...-S.SG-|-.G..-GS.S-|-SGS.-....-....-..G.-|-.SGS-....-....-...G-|-S.SG-....-....-G...-|-GS.S-....-....-.G..-|-S...-G...-SG..-|-.S..-.G..-.SG.-|-..S.-..G.-..SG-|-...S-...G-G...S-|-G...-SG..-....-S...-|-.G..-.SG.-....-.S..-|-..G.-..SG-....-..S.-|-...G-G..S-....-...S-|-SG..-....-S...-G...-|-.SG.-....-.S..-.G..-|-..SG-....-..S.-..G.-|-G..S-....-...S-...G-|-SGS.-G...-|-.SGS-.G..-|-S.SG-..G.-|-GS.S-...G-|-G...-....-....-SGS.-|-.G..-....-....-.SGS-|-..G.-....-....-S.SG-|-...G-....-....-GS.S-|-.S..-.G..-GS..-|-..S.-..G.-.GS.-|-...S-...G-..GS-|-S...-G...-S..G-/;

var templeH = /-..G.-BBS.-|-...G-.BBS-|-G...-S.BB-|-.G..-BS.B-|-BBS.-..G-|-.BBS-...G-|-S.BB-G...-|-BS.B-.G..-|-BBS.-....-....-..G.-|-.BBS-....-....-...G-|-S.BB-....-....-G...-|-BS.B-....-....-.G..-|-..G.-....-....-BBS.-|-...G-....-....-.BBS-|-G...-....-....-S.BB-|-.G..-....-....-BS.B-|-B...-B...-SG..-|-.B..-.B..-.SG.-|-..B.-..B.-..SG-|-...B-...B-G..S-|-B...-SG..-....-B...-|-.B..-.SG.-....-.B..-|-..B.-..SG-....-..B.-|-...B-G..S.-....-...B-|-B...-B...-S..G-|-.B..-.B..-GS..-|-..B.-..B.-.GS.-|-...B-...B-..GS-|-B...-SG..-.... -B...-|-.B..-.B..-....-.SG.-|-..B.-..SG-....-..B.-|-...B-G..S-....-...B|-SG..-....-B...-B...-|-.SG.-....-.B..-.B..-|-..SG-....-..B.-..B.-|-G..S-....-...B-...B-|-SBB.-G...-|-.SBB-.G..-|-B.SB-..G.-|-BB.S-...G-|-G...-....-....-SBB.-|-.G..-....-....-.SBB-|-..G.-....-....-B.SB-|-...G-....-....-BB.S-|-GS..-.B..-.B..-|-.GS.-..B.-..B.-|-..GS-...B-...B-|-S..G-B...-B...-|-.B..-.B..-....-GS..-|-..B.-..B.-....-.GS.-|-...B-...B-....-..GS-|-B...-B...-....-S..G-|-.B..-....-SG..-.B..-|-..B.-....-.SG.-..B.-|-...B-....-..SG-...B-|-B...-....-G..S-B...-/;

var cloister = /-..G.-WBS.-|-...G-.WBS-|-G...-S.WB|-.G..-BS.W-|-WBS.-....-..S.-|-.WBS-....-...S-|-S.WB-....-S...-|-BS.W-....-.S..-|-W...-B...-SG..-|-.W..-.B..-.SG.-|-..W.-..B.-..SG-|-...W-...B-G..S-|-B...-SG..-....-W...-|-.B..-.SG.-....-W..-|-..B.-..SG-....-..W.-|-...B-G..S-....-...W-|-SG..-....-W...-B...-|-.SG.-....-.W..-.B..-|-..SG-....-..W.-..B.-|-G..S-....-...W-...B-|-SBW.-G...-|-.SBW-.G..-|-W.SB-..G.-|-BW.S.-...G-|-WBS.-..G.-|-.WBS-...G-|-S.WB.-G...-|-BS.W-.G..-|-G...-....-....-SBW.-|-.G..-....-....-.SBW-|-..G.-....-....-W.SB-|-...G-....-....-RW.S-|-GS..-.R..-.W..-|-.GS.-..R.-..W.-|-..GS-...R-...W-|-G..S.-R...-W...-|-.B..-.W..-....-GS..-|-..B.-..W.-....-.GS.-|-...B-...W-....-..GS-|-B...-W...-....-S..G-|-.W..-....-GS..-.B..-|-..W.-....-.GS.-..B.-|-...W-....-..GS-...B-|-W...-....-S..G-B...-/;

//VERDES
var almshouseH = /-SSG.-|-.SSG-|-GSS.-|-.GSS-|-G...-S...-S...-|-.G..-.S..-.S..-|-..G.-..S.-..S.-|-...G-...S-...S-|-S...-S...-G...-|-.S..-.S..-.G..-|-..S.-..S.-..G.-|-...S-...S-...G-/;

var feasthallH = /-WWG.-|-.WWG-|-G.WW-|-WG.W-|-GWW.-|-.GWW-|-W.GW-|WW.G-|-W...-W...-G...-|-.W..-.W..-.G..-|-..W.-..W.-..G.-|-...W-...W-...G|-G...-W...-W...-|-.G..-.W..-.W..-|-..G.-..W.-..W.-|-...G-...W-...W|-W...-G...-....-W...-|-.W..-.G..-....-.W..-|-..W.-..G.-....-..W.-|-...W-...G-....-...W-|-G...-....-W...-W...-|-.G..-....-.W..-.W..-|-..G.-....-..W.-..W.-|-...G-....-...W-...W-|-W...-....-G...-W...-|-.W..-....-.G..-.W..-|-..W.-....-..G.-..W.-|-...W-....-...G-...W-|-W...-W...-....-G...-|-.W..-.W..-....-.G..-|-..W.-..W.-....-..G.-|-...W-...W-....-...G-/;

var tavernH = /-BBG.-|-.BBG-|-G.BB-|-BG.B-|-B...-B...-G...-|-.B..-.B..-.G..-|-..B.-..B.-..G.-|-...B-...B-...G-|-G...-B...-B...-|-.G..-.B..-.B..-|-..G.-..B.-..B.-|-...G-...B-...B-|-GBB.-|-.GBB-|-B.GB-|-BB.G-/;


//AMARILLAS

var bakeryH = /-.T..-BGB.-|-..T.-.BGB-|-...T-B.BG-|-T...-GB.B-|-T...-GB.B-|-BGB.-....-....-.T..-|-.BGB-....-....-..T.-|-B.BG-....-....-...T-|-GB.B-....-....-T...-|-R...-GT..-R...-|-.R..-.GT.-.R..-|-..B.-..GT-..B.-|-...B-T..G-...B-|-GT..-B...-....-B...|-.GT.-.B..-....-.B..|-..GT-..B.-....-..B.|-T..G-...B-....-...B|-B...-...-B...-GT..|-.B..-.B..-....-.GT.|-..B.-....-...B-..GT|-...B-....-...B-T..G-|-BGB.-.T..-|-.BGB-..T.-|-B.BG-...T-|-GB.B-T...-|-.T..-....-....-BGB.-|-..T.-....-....-.BGB-|-...T-....-....-B.BG-|-T...-....-....-GB.B-|-.B..-TG..-.B..-|-..B.-.TG.-..B.-|-...B-..TG-...B-|-B...-G..T-B...-|-TG..-.B..-....-.B..-|-.TG.-..B.-....-..B.-|-..TG-...B-....-...B-|-G..T-B...-....-B...-|-.B..-....-.B..-TG..-|-..B.-....-..B.-.TG.-|-...B-....-...B-..TG-|-B...-....-B...-G..T-/;


var marketH = /-.W..-SGS.-|-..W.-.SGS-|-...W-S.SG-|-W...-GS.S-|-SGS.-....-....-.W..-|-.SGS-....-....-..W.-|-S.SG-....-....-...W-|-GS.S-....-....-W...-|-S...-GW..-S...-|-.S..-.GW.-.S..-|-..S.-..GW-..S.-|-...S-W..G-...S-|-GW..-S...-....-S...-|-.GW.-.S..-....-.S..-|-..GW-..S.-....-..S.-|-W..G-...S-....-...S-|-S...-....-S...-GW..-|-.S..-....-.S..-.GW.-|-..S.-....-..S.-..GW-|-...S-....-...S-W..G-|-SGS.-.W..-|-.SGS-..W.-|-S.SG-...W-|-GS.S-W...-|-.W..-....-....-SGS.-|-..W.-....-....-.SGS-|-...W-....-....-S.SG-|-W...-....-....-GS.S-|-.S..-WG..-.S..-|..S.-.WG.-..S.-|-...S-..WG-...S-|-S...-G..W.-S...-|-WG..-.S..-....-.S..-|-.WG.-..S.-....-..S.-|-..WG-...S-....-...S-|-G..W-S...-....-S...-|-.S..-....-.S..-GW..-|-..S.-....-..S.-.GW.-|-...S-....-...S-..GW-|-S...-....-S...-W..G-/;



var tailorH = /--/;

var theater = /--/;




//NEGRAS
var factoryH = /-W...-BSSB-|-.W..-BBSS-|-..W.-SBBS-|-...W-SSBB-|-BW..-S...-S...-B...-|-.BW.-.S..-.S..-.B..-|-..BW-..S.-..S.-..B.-|-W..B-...S-...S-...B-|-BSSB-...W-|-SSBB-..W.-|-SBBS-.W..-|-BBSS-W...-|-...B-...S-...S-..WB-|-..B.-..S.-..S.-.WB.-|-.B..-.S..-.S..-WB..-|-B...-S...-S...-B..W-/;

var tradingpostH = /-SW..-SWB.-|.SW.-.SWB-|-..SW-B.SW-|-W..S-WB.S-|-SWB.-....-....-SW..-|-.SWB-....-....-.SW.-|-B.SW-....-....-..SW-|-WB.S-....-....-W..S-|-SS..-WW..-B...-|-.SS.-.WW.-.B..-|-..SS-..WW-..B.-|-S..S-W..W-...B-|-WW..-B...-....-SS..-|-.WW.-.B..-....-.SS.-|-..WW-..B.-....-..SS-|-W..W-...B-....-S..S-|-BWS.-.WS.-|-.BWS-..WS-|-S.BW-S..W-|-WS.B-WS..-|-.WS.-....-....-BWS.-|-..WS-....-....-.BWS-|-S..W-....-....-S.BW-|-WS..-....-....-WS.B-|-.B..-WW..-SS..-|-..B.-.WW.-.SS.-|-...B-..WW-..SS-|-B...-W..W-S..S-|-WW..-SS..-....-.B..-|-.WW.-.SS.-....-..B.-|-..WW-..SS-....-...B-|-W..W-S..S-....-B...-/;

var warehouseH = /-TWT.-B.B.-|-.TWT-.B.B-|-T.TW-B.B.-|-WT.T-.B.B-|-B.B.-....-....-TWT.-|-.B.B-....-....-.TWT-|-B.B.-....-....-T.TW-|-.B.B-....-....-WT.T-|-BT..-.W..-BT..-|-.BT.-..W.-.BT.-|-..BT-...W-..BT-|-T..B-W...-T..B-|-.W..-BT..-....-BT..-|-..W.-.BT.-....-.BT.-|-...W-..BT-....-..BT-|-W...-T..B-....-T..B-|-B.B.-TWT.-|-.B.B-.TWT-|-B.B.-T.TW-|-.B.B-WT.T-|-TWT.-....-....-B.B.-|-.TWT-....-....-.B.B-|-T.TW-....-....-B.B.-|-WT.T-....-....-.B.B-|-TB..-W...-TB..-|-.TB.-.W..-.TB-|-..TB-..W.-..TB-|-B..T-...W-B..T-|-W...-TB..-....-TB..-| -.W..-.TB.-....-.TB.-|-..W.-..TB-....-..TB-|-...W-B..T-....-B..T-|-TB..-....-TB..-W...-|-.TB.-....-.TB.-.W..-|-..TB-....-..TB-..W.-|-B..T-....-B..T-...W-|-BT..-....-BT..-.W..-|-.BT.-....-.BT.-..W.-|-..BT-....-..BT-...W-|-T..B-....-T..B-W...-/;


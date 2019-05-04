import Card from "./card";
import {
    KONSERWATYZM,
    PRAWICA,
    SOCJALIZM,
    LEWICA,
    LIBERALIZM,
    TUMIWISIZM
} from "./politicalViews";

const img = "https://ocdn.eu/pulscms-transforms/1/ieqktkqTURBXy9jNTJlZTU3MzExY2QwMGY2ZmVhNjc5ZTQ3M2RiMzdmMC5qcGVnkpUDAADNErHNCoSTBc0Djs0CXw";


export default [
    new Card(
        "001",
        "card1",
        {
            [KONSERWATYZM]: 1,
            [PRAWICA]: 2,
            [SOCJALIZM]: 3,
            [LEWICA]: 4,
            [LIBERALIZM]: 5,
            [TUMIWISIZM]: 6
        },
        img
    )
];

# -*- coding: utf-8 -*-
import random


def generate_card(f, i):
    ko = random.randint(0, 10)
    pr = random.randint(0, 10)
    so = random.randint(0, 10)
    le = random.randint(0, 10)
    li = random.randint(0, 10)
    tu = random.randint(0, 10)

    card = (ko, pr, so, le, li, tu)

    a = None
    if i < 9:
        a = "00{}".format(i+1)
    elif i < 99:
        a = "0{}".format(i+1)
    else:
        a = "{}".format(i+1)

    f.write('''    new Card(
        "{}",
        "card{}",
        {}
            [KONSERWATYZM]: {},
            [PRAWICA]: {},
            [SOCJALIZM]: {},
            [LEWICA]: {},
            [LIBERALIZM]: {},
            [TUMIWISIZM]: {}
        {},
        img
    ),\n'''.format(a, a, "{", *card, "}"))
    return card


def generate_deck(cards_q):
    deck = set()
    with open("result.txt", "w") as f:
        card = generate_card(f, 0)
        deck.add(card)
        for i in range(1, cards_q):
            while card in deck:
                card = generate_card(f, i)
            deck.add(card)


if __name__ == "__main__":
    cards_q = 50
    generate_deck(cards_q)


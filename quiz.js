// ====================================================================================
// TEIL 1: FRAGENKATALOG (Aktuell 25 Fragen. Bitte auf 50 erweitern!)
// ====================================================================================

const quizData = [
    // --------------------------------------------------------------------------------
    // R1-4: GRUNDLAGEN, AUSRÜSTUNG (4 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "I.1",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Wann fallen im Zählspiel nach Regel 1.3c(4) mehrere Strafen für den Verstoß gegen mehrere Regeln an?",
        "image_query": "Golfregel Strafen",
        "options": [
            "Wenn gegen Regeln mit unterschiedlichem Strafmaß verstoßen wird.",
            "Wenn der Spieler die Verstöße nicht selbst erkennt.",
            "Wenn ein zwischenzeitliches Ereignis (ein Schlag oder das Wissen/Erkennen des Verstoßes) zwischen den Regelverstößen lag.",
            "Immer, wenn die Verstöße an verschiedenen Löchern stattfanden."
        ],
        "answer_index": 2,
        "explanation": "Mehrere Strafen fallen nur dann an, wenn ein zwischenzeitliches Ereignis (Schlag oder Wissen/Erkennen) die Verstöße trennt. Wenn keine solche Unterbrechung vorliegt, gilt nur die jeweils höhere Strafe (Regel 1.3c(4))."
    },
    {
        "id": "I.2",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Ein zugelassener Schläger wird während der Runde durch Missbrauch (zum Beispiel Wut) beschädigt. Was darf der Spieler tun?",
        "image_query": "Golfschläger beschädigt",
        "options": [
            "Er darf ihn sofort durch einen anderen Schläger ersetzen, aber nur, wenn er die 14er-Grenze nicht überschreitet.",
            "Er muss den Schläger für den Rest der Runde aus dem Spiel nehmen.",
            "Er darf ihn nicht ersetzen, aber er darf ihn in dem beschädigten Zustand weiter benutzen.",
            "Er muss den beschädigten Schläger entweder reparieren oder ersetzen, um ihn weiter zu benutzen."
        ],
        "answer_index": 2,
        "explanation": "Bei Missbrauch darf der Schläger nicht ersetzt werden, aber er gilt weiterhin als regelkonform und darf benutzt werden (Regel 4.1a(2))."
    },
    {
        "id": "I.3",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Was ist die Verantwortung des Spielers in Bezug auf das Handicap auf der Scorekarte (gültig ab 2023)?",
        "image_query": "Scorekarte Handicap",
        "options": [
            "Der Spieler ist verpflichtet, sein Handicap und das berechnete Nettoergebnis für das Loch auszuweisen.",
            "Der Spieler muss sicherstellen, dass sein Handicap auf der Scorekarte korrekt ausgewiesen ist, um Disqualifikation zu vermeiden.",
            "Der Spieler ist nicht für die Angabe des Handicaps oder die Addition der Lochergebnisse verantwortlich.",
            "Der Spieler ist nur dafür verantwortlich, die Brutto-Ergebnisse korrekt einzutragen und die Scorekarte zu unterschreiben."
        ],
        "answer_index": 2,
        "explanation": "Seit 2023 muss ein Spieler sein Handicap nicht mehr auf der Scorekarte ausweisen. Die Spielleitung ist für die Berechnung der Handicapschläge und die Addition der Lochergebnisse verantwortlich (Regel 3.3b(4))."
    },
    {
        "id": "I.4",
        "section": "I. Grundlagen & Ausrüstung (Regeln 1-4)",
        "question": "Was geschieht, wenn zwei Spieler im Lochspiel vereinbaren, eine ihnen bekannte, anzuwendende Strafe absichtlich außer Acht zu lassen?",
        "image_query": "Zwei Golfer schütteln Hände",
        "options": [
            "Beide ziehen sich die Grundstrafe (Lochverlust) am nächsten Loch zu.",
            "Das vereinbarte Ergebnis gilt, da das Lochspiel nach Absprache entschieden werden kann.",
            "Beide Spieler sind disqualifiziert.",
            "Der Spieler, der zuerst gegen die Vereinbarung verstößt, zieht sich die Grundstrafe zu."
        ],
        "answer_index": 2,
        "explanation": "Vereinbaren zwei oder mehr Spieler, eine ihnen bekannte Regel oder Strafe absichtlich außer Acht zu lassen, sind sie disqualifiziert (Regel 1.3b(1))."
    },
    
    // --------------------------------------------------------------------------------
    // R5-6: RUNDE UND LOCH (4 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "II.1",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Ein Spieler trifft spielbereit vier Minuten nach seiner Startzeit am Ort des Starts ein. Was ist die Strafe im Zählspiel?",
        "image_query": "Uhr Startzeit Golf",
        "options": [
            "Disqualifikation, da die Startzeit nicht eingehalten wurde.",
            "Keine Strafe, da die Verspätung unter fünf Minuten liegt und der Spieler spielbereit ist.",
            "Die Grundstrafe (zwei Strafschläge) am ersten Loch.",
            "Ein Strafschlag am ersten Loch."
        ],
        "answer_index": 2,
        "explanation": "Bei einer Verspätung von nicht mehr als fünf Minuten erhält der Spieler die Grundstrafe (zwei Strafschläge) am ersten Loch (Regel 5.3a Ausnahme 1)."
    },
    {
        "id": "II.2",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Wo ist das Üben von Putten oder Chippen nach Beendigung eines Lochs, aber vor dem nächsten Abschlag, nicht gestattet?",
        "image_query": "Golfer übt putten",
        "options": [
            "Auf dem Grün des zuletzt gespielten Lochs.",
            "Auf dem Abschlag des nächsten Lochs.",
            "Aus einem Bunker des zuletzt gespielten Lochs.",
            "Auf jedem Übungsgrün, das nicht der Platz ist."
        ],
        "answer_index": 2,
        "explanation": "Das Üben von Putten oder Chippen ist auf dem zuletzt gespielten Grün und dem nächsten Abschlag erlaubt, aber solche Übungsschläge dürfen nicht aus einem Bunker ausgeführt werden (Regel 5.5b Ausnahme)."
    },
    {
        "id": "II.3",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Sie spielen Ihren ersten Schlag eines Lochs von außerhalb des Abschlags im Lochspiel. Wie verfährt der Gegner?",
        "image_query": "Golf Abschlag",
        "options": [
            "Der Schlag zählt automatisch, und der Ball ist im Spiel.",
            "Der Gegner zieht die Grundstrafe (Lochverlust) zu, da der Schlag von außerhalb des Abschlags ausgeführt wurde.",
            "Der Gegner darf den Schlag für ungültig erklären; der Spieler muss dann erneut von innerhalb des Abschlags spielen.",
            "Der Spieler zieht die Grundstrafe (zwei Strafschläge) zu und muss den Fehler berichtigen."
        ],
        "answer_index": 2,
        "explanation": "Im Lochspiel ist dies straflos, aber der Gegner darf den Schlag unverzüglich für ungültig erklären. Tut er dies, muss der Spieler von innerhalb des Abschlags erneut spielen (Regel 6.1b(1))."
    },
    {
        "id": "II.4",
        "section": "II. Spielen der Runde & Lochs (Regeln 5-6)",
        "question": "Ein Spieler unterbricht das Spiel wegen begründeter Blitzgefahr. Was muss er tun, um eine Disqualifikation zu vermeiden?",
        "image_query": "Blitzgewitter Golfplatz",
        "options": [
            "Er muss die Unterbrechung sofort per SMS an die Spielleitung melden.",
            "Er muss dies so bald wie möglich der Spielleitung mitteilen.",
            "Er darf das Spiel nur unterbrechen, wenn die Spielleitung die sofortige Unterbrechung angeordnet hat.",
            "Er muss die Zustimmung des Gegners (im Lochspiel) oder der Gruppe (im Zählspiel) einholen."
        ],
        "answer_index": 1,
        "explanation": "Ein Spieler darf das Spiel unterbrechen, wenn er begründet Blitzgefahr als gegeben ansieht, muss dies aber so bald wie möglich der Spielleitung mitteilen (Regel 5.7a)."
    },

    // --------------------------------------------------------------------------------
    // R7-11: BALL SPIELEN, BEWEGUNG (5 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "III.1",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ein Ball auf dem Grün, der bereits aufgenommen und zurückgelegt wurde, bewegt sich durch Wind (Naturkräfte) aus seiner Lage. Was muss der Spieler tun?",
        "image_query": "Golfball auf Grün bewegt",
        "options": [
            "Er spielt den Ball von seiner neuen Stelle (straflos).",
            "Er zieht einen Strafschlag zu und legt den Ball an die ursprüngliche Stelle zurück.",
            "Er muss den Ball an seine ursprüngliche Stelle zurücklegen (straflos).",
            "Er zieht die Grundstrafe zu und legt den Ball an die ursprüngliche Stelle zurück."
        ],
        "answer_index": 2,
        "explanation": "Bewegt sich der Ball auf dem Grün, nachdem er bereits aufgenommen und zurückgelegt worden war, muss er an die ursprüngliche Stelle zurückgelegt werden, unabhängig von der Ursache (Regel 9.3 Ausnahme 1)."
    },
    {
        "id": "III.2",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ein vom Grün gespielter Ball trifft versehentlich den Schläger, der für den Schlag benutzt wurde. Wie muss der Spieler verfahren?",
        "image_query": "Golfball trifft Schläger",
        "options": [
            "Der Schlag zählt nicht; der Spieler muss den Schlag wiederholen, ohne Strafe.",
            "Der Schlag zählt; der Spieler zieht einen Strafschlag zu und muss den Ball spielen, wie er liegt.",
            "Der Schlag zählt; der Ball muss gespielt werden, wie er liegt.",
            "Der Spieler ist disqualifiziert, da die eigene Ausrüstung getroffen wurde."
        ],
        "answer_index": 2,
        "explanation": "Trifft ein vom Grün gespielter Ball versehentlich den Schläger, der für den Schlag benutzt wurde, ist dies straflos, und der Ball wird gespielt, wie er liegt. Der Schlag wird nicht wiederholt (Regel 11.1b(2))."
    },
    {
        "id": "III.3",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Der Ball eines Spielers wird versehentlich bewegt, während er oder sein Caddie ihn redlich sucht. Was ist die Strafe?",
        "image_query": "Golfball im Rough",
        "options": [
            "Die Grundstrafe (zwei Strafschläge), und der Ball muss zurückgelegt werden.",
            "Keine Strafe, und der Ball muss an seine ursprüngliche Stelle zurückgelegt werden.",
            "Ein Strafschlag, und der Ball muss zurückgelegt werden.",
            "Keine Strafe, und der Ball muss von seiner neuen Stelle gespielt werden."
        ],
        "answer_index": 1,
        "explanation": "Die Bewegung ist straflos, wenn sie versehentlich während der redlichen Suche geschieht; der Ball muss an die geschätzte ursprüngliche Stelle zurückgelegt werden (Regel 7.4)."
    },
    {
        "id": "III.4",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Ein Spieler legt einen Schläger auf den Boden, um sich bei der Ausrichtung zu helfen. Ist das Entfernen des Gegenstandes vor dem Schlag straflos?",
        "image_query": "Golf Ausrichtungshilfe",
        "options": [
            "Ja, die Strafe wird vermieden, wenn der Schläger vor dem Schlag entfernt wird.",
            "Nein, diese Handlung ist generell verboten und die Strafe kann nicht durch nachträgliches Entfernen vermieden werden.",
            "Ja, wenn die Spielleitung keine Platzregel erlassen hat, die dies verbietet.",
            "Nein, außer für blinde Spieler, für die diese Regel nicht gilt."
        ],
        "answer_index": 1,
        "explanation": "Das Hinlegen eines Gegenstandes zur Ausrichtung ist eine unzulässige Hilfe, und die Strafe kann nicht vermieden werden, indem der Gegenstand vor dem Schlag entfernt wird (Regel 10.2b(3))."
    },
    {
        "id": "III.5",
        "section": "III. Spielen des Balls (Regeln 7-11)",
        "question": "Sie entfernen einen Ast (losen hinderlichen Naturstoff) und verursachen dadurch, dass sich Ihr Ball außerhalb des Grüns bewegt. Was ist die Folge?",
        "image_query": "Lose hinderliche Naturstoffe bewegen Ball",
        "options": [
            "Straflos, wenn der Ball zurückgelegt wird.",
            "Ein Strafschlag, und der Ball muss an die ursprüngliche Stelle zurückgelegt werden.",
            "Grundstrafe, und der Ball muss an die ursprüngliche Stelle zurückgelegt werden.",
            "Straflos, und der Ball muss von der neuen Stelle gespielt werden."
        ],
        "answer_index": 1,
        "explanation": "Das Entfernen eines losen hinderlichen Naturstoffs, das die Bewegung des Balls außerhalb des Grüns verursacht, zieht einen Strafschlag nach sich, und der Ball muss zurückgelegt werden (Regel 15.1b, Regel 9.4b)."
    },
    
    // --------------------------------------------------------------------------------
    // R12-13: BUNKER UND GRÜN (4 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "IV.1",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Welche Handlung zieht eine Strafe nach sich, wenn der Ball im Bunker liegt?",
        "image_query": "Golfbunker",
        "options": [
            "Die Füße eingraben, um den Stand einzunehmen.",
            "Sich auf einen Schläger stützen, um das Gleichgewicht zu halten.",
            "Den Sand in dem Bereich unmittelbar vor dem Ball mit dem Schläger im Rückschwung berühren.",
            "Nachdem der Ball den Bunker verlassen hat, Sand auf der Spiellinie zum nächsten Schlag einharken."
        ],
        "answer_index": 2,
        "explanation": "Das Berühren des Sandes im Rückschwung für den Schlag ist nicht gestattet und zieht die Grundstrafe nach sich (Regel 12.2b(1))."
    },
    {
        "id": "IV.2",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Ein Ball ragt über den Lochrand hinaus. Wie lange darf der Spieler warten, um zu sehen, ob der Ball von selbst fällt?",
        "image_query": "Ball am Lochrand",
        "options": [
            "Fünf Sekunden, nachdem der Spieler das Loch erreicht hat.",
            "Eine angemessene Zeit, um das Loch zu erreichen, und weitere zehn Sekunden.",
            "15 Sekunden ab dem Zeitpunkt, an dem der Spieler das Loch erreicht.",
            "Es gibt keine Wartezeit; der Spieler muss sofort spielen."
        ],
        "answer_index": 1,
        "explanation": "Der Spieler darf eine angemessene Zeit warten, um das Loch zu erreichen, und dann weitere zehn Sekunden, bevor der Ball als zur Ruhe gekommen gilt (Regel 13.3a)."
    },
    {
        "id": "IV.3",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Welche Art von Schaden gehört **nicht** zur Definition von 'Schäden auf dem Grün', die ausgebessert werden dürfen?",
        "image_query": "Golf Grün ausbessern",
        "options": [
            "Sodenkanten oder alte Lochpfropfen.",
            "Die durch Tierspuren oder Hufabdrücke verursachten Schäden.",
            "Die durch eine Ausrüstung (z.B. Schläger) hervorgerufenen Kratzer oder Dellen.",
            "Natürliche Oberflächenunebenheiten, wie Kahlstellen oder Unkraut."
        ],
        "answer_index": 3,
        "explanation": "'Schäden auf dem Grün' sind keine Schäden oder Umstände, die durch natürliche Oberflächenunebenheiten (wie Kahlstellen oder Unkraut) entstehen (Regel 13.1c(2) Ausnahme)."
    },
    {
        "id": "IV.4",
        "section": "IV. Sonderregeln für Bunker & Grüns (Regeln 12-13)",
        "question": "Ein Spieler belässt den Flaggenstock im Loch. Der Ball in Bewegung trifft ihn. Was ist die Folge?",
        "image_query": "Golf Flaggenstock im Loch",
        "options": [
            "Der Schlag wird wiederholt, und der Spieler erhält einen Strafschlag.",
            "Dies ist strafbar, der Spieler zieht die Grundstrafe zu.",
            "Dies ist straflos, und der Ball muss gespielt werden, wie er liegt.",
            "Der Schlag zählt nicht, und der Spieler muss den Schlag wiederholen."
        ],
        "answer_index": 2,
        "explanation": "Trifft der Ball in Bewegung den im Loch befindlichen Flaggenstock, ist dies straflos (außer in bestimmten Fällen des absichtlichen Beeinflussens), und der Ball muss gespielt werden, wie er liegt (Regel 13.2a(2))."
    },
    
    // --------------------------------------------------------------------------------
    // R14: BALL AUFNEHMEN, DROPPEN, LEGEN (3 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "V.1",
        "section": "V. Ball aufnehmen & ins Spiel zurückbringen (Regel 14)",
        "question": "Aus welcher Höhe muss ein Ball bei einem Erleichterungsverfahren korrekt gedroppt werden?",
        "image_query": "Droppen aus Kniehöhe",
        "options": [
            "Aus Schulterhöhe.",
            "Aus Hüfthöhe.",
            "Aus Kniehöhe.",
            "Aus jeder beliebigen Höhe, solange er senkrecht losgelassen wird."
        ],
        "answer_index": 2,
        "explanation": "Der Ball muss aus Kniehöhe senkrecht nach unten fallen gelassen werden (Regel 14.3b(2))."
    },
    {
        "id": "V.2",
        "section": "V. Ball aufnehmen & ins Spiel zurückbringen (Regel 14)",
        "question": "Ein Spieler versucht, einen Ball an seine ursprüngliche Stelle zurückzulegen (außerhalb des Grüns und nicht im Sand). Der Ball bleibt zweimal nicht liegen. Was muss der Spieler beim dritten Versuch tun?",
        "image_query": "Golfball zurücklegen",
        "options": [
            "Er muss einen Strafschlag hinzurechnen und den Ball von der Stelle des vorigen Schlages spielen.",
            "Er muss den Ball erneut von der Kniehöhe droppen.",
            "Er muss den Ball an die nächstgelegene Stelle legen, an der der Ball in Ruhe liegen bleibt (nicht näher zum Loch).",
            "Er muss einen Ball an einen beliebigen Ort innerhalb einer Schlägerlänge von der ursprünglichen Stelle legen."
        ],
        "answer_index": 2,
        "explanation": "Bleibt der Ball nach zweimaligem Versuchen nicht an der ursprünglichen Stelle liegen, muss er an die nächstgelegene Stelle gelegt werden, an der er in Ruhe liegen bleibt, nicht näher zum Loch (Regel 14.2e)."
    },
    {
        "id": "V.3",
        "section": "V. Ball aufnehmen & ins Spiel zurückbringen (Regel 14)",
        "question": "Ein auf korrekte Weise gedroppter Ball wird absichtlich von einem äußeren Einfluss abgelenkt, bevor er zur Ruhe kommt. Was muss der Spieler tun?",
        "image_query": "Golfball absichtlich abgelenkt",
        "options": [
            "Er spielt den Ball, wie er liegt, und zieht einen Strafschlag zu.",
            "Er muss einen Ball erneut droppen; der absichtlich abgelenkte Ball zählt nicht als einer der beiden Drops.",
            "Er spielt den Ball von der Stelle, an der er zur Ruhe kam (straflos).",
            "Er beendet das Erleichterungsverfahren, indem er den Ball hinlegt."
        ],
        "answer_index": 1,
        "explanation": "Wird ein Ball absichtlich abgelenkt oder aufgehalten, bevor er zur Ruhe kommt, muss der Spieler erneut droppen, ohne dass dies als einer der beiden Drops zählt (Regel 14.3d)."
    },
    
    // --------------------------------------------------------------------------------
    // R15-16: STRAFLOSE ERLEICHTERUNG (3 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "VI.1",
        "section": "VI. Straflose Erleichterung (Regeln 15-16)",
        "question": "Wo auf dem Platz ist straflose Erleichterung von ungewöhnlichen Platzverhältnissen (UPV) nicht zulässig?",
        "image_query": "Ungewöhnliche Platzverhältnisse",
        "options": [
            "Wenn der Ball im Aus liegt.",
            "Wenn der Ball in einem Bunker liegt (straflose Erleichterung ist nur im Bunker möglich).",
            "Wenn der Ball in einer Penalty Area liegt.",
            "Wenn die Beeinträchtigung ausschließlich außerhalb des Platzes (im Aus) liegt."
        ],
        "answer_index": 2,
        "explanation": "Erleichterung bei Beeinträchtigung durch ungewöhnliche Platzverhältnisse ist nur zulässig, wenn die UPV auf dem Platz sind und der Ball auf dem Platz liegt, außer in einer Penalty Area (Regel 16.1a(2))."
    },
    {
        "id": "VI.2",
        "section": "VI. Straflose Erleichterung (Regeln 15-16)",
        "question": "Was passiert, wenn der Ball eines Spielers in oder auf einem beweglichen Hemmnis liegt, aber nicht gefunden wird?",
        "image_query": "Ball in beweglichem Hemmnis verloren",
        "options": [
            "Der Spieler muss Erleichterung mit Schlag und Distanzverlust in Anspruch nehmen.",
            "Der Ball gilt als verloren, und der Spieler muss von der Stelle des vorigen Schlages spielen.",
            "Der Spieler darf straflose Erleichterung in Anspruch nehmen, indem er am geschätzten Punkt des Kreuzens der Hemmnisgrenze droppt.",
            "Der Spieler zieht einen Strafschlag zu und droppt den Ball an der Stelle, an der das Hemmnis lag."
        ],
        "answer_index": 2,
        "explanation": "Wenn bekannt oder so gut wie sicher ist, dass der Ball in oder auf einem beweglichen Hemmnis liegt, darf der Spieler straflose Erleichterung in Anspruch nehmen, indem er den geschätzten Punkt des Kreuzens der Hemmnisgrenze als Bezugspunkt verwendet (Regel 15.2b)."
    },
    {
        "id": "VI.3",
        "section": "VI. Straflose Erleichterung (Regeln 15-16)",
        "question": "Wann gilt ein Ball als eingebettet im Sinne der Regel 16.3?",
        "image_query": "Eingebetteter Ball Gelände",
        "options": [
            "Wenn der Ball tief im Gras liegt und nicht sichtbar ist.",
            "Wenn der Ball in Folge des vorigen Schlags des Spielers in seinem eigenen Einschlagloch liegt und sich teilweise unter der Bodenoberfläche befindet.",
            "Wenn der Ball in einem beliebigen Einschlagloch liegt (auch von einem anderen Ball), das sich im Gelände befindet.",
            "Wenn der Ball unter der Bodenoberfläche liegt, nachdem eine Person darauf getreten ist."
        ],
        "answer_index": 1,
        "explanation": "Der Ball eines Spielers gilt nur dann als eingebettet, wenn er in Folge des vorigen Schlags des Spielers in seinem eigenen Einschlagloch liegt und sich teilweise unter der Bodenoberfläche befindet (Regel 16.3a(2))."
    },
    
    // --------------------------------------------------------------------------------
    // R17-19: ERLEICHTERUNG MIT STRAFE (3 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "VII.1",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Wie viele Strafschläge zieht sich der Spieler zu, wenn er sich entscheidet, Erleichterung 'auf der Linie zurück' außerhalb des Bunkers für einen unspielbaren Ball im Bunker zu nehmen?",
        "image_query": "Unspielbarer Ball Bunker",
        "options": [
            "Einen Strafschlag.",
            "Drei Strafschläge.",
            "Zwei Strafschläge.",
            "Grundstrafe (Lochverlust im Lochspiel)."
        ],
        "answer_index": 2,
        "explanation": "Die zusätzliche Erleichterungsmöglichkeit, außerhalb des Bunkers zu droppen, kostet zwei Strafschläge (Regel 19.3b)."
    },
    {
        "id": "VII.2",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Wie lange hat der Spieler maximal Zeit, nach seinem Ball zu suchen, bevor dieser als 'verloren' gilt?",
        "image_query": "Golfball Suchzeit",
        "options": [
            "Fünf Minuten.",
            "Zehn Minuten.",
            "Drei Minuten.",
            "Eine angemessene Zeit (max. 5 Minuten), um den Suchbereich zu erreichen."
        ],
        "answer_index": 2,
        "explanation": "Ein Ball ist verloren, wenn er nicht innerhalb von drei Minuten gefunden wurde, nachdem der Spieler oder sein Caddie begonnen hat, nach ihm zu suchen (Regel 18.2a(1))."
    },
    {
        "id": "VII.3",
        "section": "VII. Erleichterung mit Strafe (Regeln 17-19)",
        "question": "Sie droppen einen provisorischen Ball, weil der ursprüngliche Ball außerhalb einer Penalty Area verloren sein könnte. Der ursprüngliche Ball wird unspielbar in einem Busch gefunden. Was müssen Sie tun?",
        "image_query": "Provisorischer Ball",
        "options": [
            "Sie spielen den provisorischen Ball weiter.",
            "Der provisorische Ball wird aufgegeben; Sie müssen Erleichterung für den ursprünglichen (unspielbaren) Ball nehmen.",
            "Sie dürfen wählen, welchen Ball Sie weiterspielen.",
            "Der provisorische Ball wird zum Ball im Spiel, da der ursprüngliche Ball nicht spielbar war."
        ],
        "answer_index": 1,
        "explanation": "Der provisorische Ball muss aufgegeben werden, und der Spieler muss dann mit einem Strafschlag Erleichterung für den unspielbaren Originalball nehmen (Regel 18.3c(3))."
    },

    // --------------------------------------------------------------------------------
    // R20-25: VORGEHENSWEISE & SONDERFORMEN (6 Fragen)
    // --------------------------------------------------------------------------------
    {
        "id": "VIII.1",
        "section": "VIII. Vorgehensweise (Regeln 20)",
        "question": "Sie sind sich im Zählspiel unsicher über die Anwendung einer Regel. Ein Referee ist nicht verfügbar. Welche Option erlaubt Ihnen die Regel 20.1c, um Ihre Rechte zu schützen?",
        "image_query": "Zwei Golfbälle",
        "options": [
            "Eine Absprache mit Ihrem Zähler treffen und das Spiel fortsetzen.",
            "Das Loch straflos mit zwei Bällen zu Ende spielen.",
            "Das Spiel unterbrechen und auf das Eintreffen eines Referees warten.",
            "Die Regel anwenden, von der Sie glauben, dass sie richtig ist, und dies später melden."
        ],
        "answer_index": 1,
        "explanation": "Ein Spieler darf das Loch straflos mit zwei Bällen zu Ende spielen, um seine Rechte zu schützen, muss dies aber der Spielleitung vor Abgabe der Scorekarte mitteilen (Regel 20.1c(3))."
    },
    {
        "id": "IX.1",
        "section": "IX. Andere Spielformen (Regeln 21-24)",
        "question": "Im Vierer (Foursomes) schlägt Partner A versehentlich außer der Reihe ab. Wie wird der Fehler korrigiert (Zählspiel)?",
        "image_query": "Zwei Golfer spielen einen Ball",
        "options": [
            "Es ist straflos, und der Ball wird weitergespielt.",
            "Die Partei zieht die Grundstrafe zu und muss den Fehler berichtigen.",
            "Die Partei zieht einen Strafschlag zu und muss den Fehler berichtigen.",
            "Die Partei wird disqualifiziert, ohne Korrekturmöglichkeit."
        ],
        "answer_index": 1,
        "explanation": "Der Schlag in der falschen Reihenfolge zieht die Grundstrafe (zwei Strafschläge) für die Partei nach sich, und der richtige Partner muss den Fehler berichtigen (Regel 22.3)."
    },
    {
        "id": "IX.2",
        "section": "IX. Andere Spielformen (Regeln 21-24)",
        "question": "Sie spielen ein Stableford-Turnier und verstoßen gegen die Regel zur 'Unangemessenen Verzögerung'. Was ist die Strafe für den ersten Verstoß an diesem Loch?",
        "image_query": "Stableford Scorekarte",
        "options": [
            "Ein Strafschlag.",
            "Grundstrafe (zwei Strafschläge).",
            "Der Spieler erhält 0 Punkte für das Loch.",
            "Der Spieler verliert das Loch (Lochverlust)."
        ],
        "answer_index": 2,
        "explanation": "Die Strafe für den ersten Verstoß gegen die Unangemessene Verzögerung (Regel 5.6a) ist ein Strafschlag. Nach Regel 21.1c wird Stableford angewendet, was bedeutet, dass das Ergebnis des Spielers an diesem Loch auf 0 Punkte reduziert wird."
    },
    {
        "id": "X.1",
        "section": "X. Spieler mit Behinderungen (Regel 25)",
        "question": "Ein blinder Spieler legt einen Schläger auf den Boden, um sich bei der Ausrichtung zu helfen. Was gilt laut Regel 25.2c?",
        "image_query": "Blinder Golfer Ausrichtungshilfe",
        "options": [
            "Dies ist verboten, da es gegen die Regel zur Hilfe bei der Ausrichtung verstößt.",
            "Es ist erlaubt, aber der Gegenstand muss entfernt werden, bevor der Schlag ausgeführt wird.",
            "Es ist erlaubt, solange nur der Caddie den Gegenstand hinlegt.",
            "Es ist erlaubt, und der Schläger darf während des Schlages auf dem Boden liegen bleiben."
        ],
        "answer_index": 1,
        "explanation": "Die Regel 10.2b(3) wird für blinde Spieler so geändert, dass das Hinlegen eines Gegenstandes zur Hilfe bei der Ausrichtung straflos ist. Der Gegenstand muss aber entfernt werden, bevor der Schlag ausgeführt wird (Regel 25.2c)."
    },
    {
        "id": "X.2",
        "section": "X. Spieler mit Behinderungen (Regel 25)",
        "question": "Ein Spieler benutzt eine Mobilitätshilfe auf Rädern und nimmt seitliche Erleichterung für einen unspielbaren Ball in Anspruch. Wie groß ist der Erleichterungsbereich?",
        "image_query": "Rollstuhl Golf",
        "options": [
            "Eine Schlägerlänge vom Bezugspunkt.",
            "Zwei Schlägerlängen vom Bezugspunkt.",
            "Drei Schlägerlängen vom Bezugspunkt.",
            "Vier Schlägerlängen vom Bezugspunkt."
        ],
        "answer_index": 3,
        "explanation": "Für Spieler mit einer Mobilitätshilfe auf Rädern wird die Größe des Erleichterungsbereichs bei seitlicher Erleichterung (Regel 19.2c) von zwei Schlägerlängen auf vier Schlägerlängen erweitert (Regel 25.4m)."
    },
    {
        "id": "Def.1",
        "section": "Definitionen & Begriffe (Regel 2)",
        "question": "Was gehört **nicht** zu den fünf definierten Bereichen des Platzes?",
        "image_query": "Golfplatz Bereiche",
        "options": [
            "Das Gelände",
            "Alle Bunker",
            "Das Aus",
            "Alle Penalty Areas"
        ],
        "answer_index": 2,
        "explanation": "Die fünf Bereiche sind: das Gelände, der Abschlag, alle Penalty Areas, alle Bunker und das Grün des Lochs. Das Aus ist außerhalb der Platzgrenzen (Regel 2.2)."
    }
];
// Füge hier die weiteren 25 Fragen hinzu, um auf 50 Fragen zu kommen!
// ====================================================================================
// ENDE FRAGENKATALOG
// ====================================================================================


// ====================================================================================
// TEIL 2: LOGIK UND AUSWERTUNG
// ====================================================================================

let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let incorrectAnswers = []; // Speichert Fragen, die falsch beantwortet wurden

const quizArea = document.getElementById('quiz-area');
const nextButton = document.getElementById('next-btn');

// ZÄHLT ALLE FRAGEN PRO ABSCHNITT FÜR DIE FORTSCHRITTSANZEIGE
function countSectionQuestions() {
    return quizData.reduce((acc, question) => {
        const section = question.section;
        acc[section] = (acc[section] || 0) + 1;
        return acc;
    }, {});
}
const sectionCounts = countSectionQuestions();


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getEvaluationText(scorePercentage) {
    const totalQuestions = quizData.length;
    const incorrectCount = totalQuestions - correctAnswersCount;

    // Skaliert die Fehlerzahl, damit die Staffelung (basierend auf 100 Fragen) funktioniert
    const errorScale = 100 / totalQuestions;
    const scaledIncorrectCount = incorrectCount * errorScale;

    if (scaledIncorrectCount >= 80) { // > 80 Fehler (0-20% richtig)
        return "Du musst dich wirklich **mehr anstrengen**! Du hast noch massive Lücken im Regelwerk. Konzentriere dich auf die Erklärungen und versuche es erneut – die Chippingdales zählen auf dich!";
    } else if (scaledIncorrectCount >= 50) { // 50-79 Fehler (21-50% richtig)
        return "Naja, da muss **mehr kommen**! Das Ergebnis ist enttäuschend. Du verpasst viele Grundlagen. Wirf einen intensiven Blick in die Regeln, bevor du das nächste Turnier spielst.";
    } else if (scaledIncorrectCount >= 30) { // 30-49 Fehler (51-70% richtig)
        return "OHA! Du bist im Mittelfeld, aber das ist noch **nicht befriedigend**. Die Lücken sind noch zu groß, um Strafschläge sicher zu vermeiden. Hol dir das Regelbuch zur Hand!";
    } else if (scaledIncorrectCount >= 15) { // 15-29 Fehler (71-85% richtig)
        return "Befriedigend! Du hast die meisten Hauptregeln erfasst, aber es gibt noch Details zu verbessern. Eine **gute** Grundlage, aber noch nicht fehlerfrei. Kämpfe um die Spitze!";
    } else if (scaledIncorrectCount > 0) { // 1-14 Fehler (86-99% richtig)
        return "Gut! Ein **sehr gutes** Ergebnis! Du bist ein Regelkenner, aber ein paar kleine Fehler haben sich eingeschlichen. Das Ziel ist 100%! Du bist fast ein Regel-Ass!";
    } else { // 0 Fehler (100% richtig)
        return "Überragend! Das ist ein **perfektes Ergebnis**! Du bist ein wandelndes Regelbuch. Dies garantiert eine stressfreie Runde. Weiter so, Champion!";
    }
}

// ZÄHLT, WIE VIELE FRAGEN IM AKTUEN ABSCHNITT BEREITS GESPIELT WURDEN
function countPlayedInSection(currentSection, currentIndex) {
    let playedCount = 0;
    // Durchläuft das QuizData Array bis zum aktuellen Index
    for (let i = 0; i < currentIndex; i++) {
        if (quizData[i].section === currentSection) {
            playedCount++;
        }
    }
    // Da der aktuelle Index noch nicht gespielt wurde, zählen wir ihn für den Fortschritt hinzu
    return playedCount + 1;
}

function displayFinalResult() {
    const totalQuestions = quizData.length;
    const percentage = (correctAnswersCount / totalQuestions) * 100;
    const evaluationText = getEvaluationText(percentage);

    let incorrectListHtml = '';
    if (incorrectAnswers.length > 0) {
        incorrectListHtml = `
            <h3>${incorrectAnswers.length} Fehler gefunden (von ${totalQuestions} Fragen):</h3>
            <ul style="list-style-type: none; padding-left: 0;">
                ${incorrectAnswers.map(item => `
                    <li style="margin-bottom: 15px; border-left: 3px solid #ff6666; padding-left: 10px;">
                        <strong>${item.question}</strong><br>
                        <span style="color: #66cc66;">✅ Korrekt: ${item.correct_option}</span><br>
                        <span style="color: #ff6666;">❌ Deine Antwort: ${item.selected_option}</span><br>
                        <p style="font-size: 0.9em; margin-top: 5px;">*Erklärung: ${item.explanation}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    quizArea.innerHTML = `
        <h2>📋 Auswertung der Golfregeln</h2>
        <p class="subtitle">Deine Leistung: ${correctAnswersCount} von ${totalQuestions} Fragen (${percentage.toFixed(0)}%)</p>
        
        <div class="explanation" style="background-color: #f0fff0; color: #1a1a1a;">
            <p style="font-size: 1.1em; font-weight: 600;">${evaluationText}</p>
        </div>
        
        ${incorrectListHtml}
    `;

    // Setze den lustigen Neustart-Namen
    nextButton.innerHTML = '⛳ Regel-Reset: Von vorne anfangen!';
    nextButton.removeEventListener('click', nextQuestionHandler);
    nextButton.addEventListener('click', restartQuizHandler);
}

function loadQuestion(questionData) {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `q-${questionData.id}`;
    
    const questionNumber = currentQuestionIndex + 1;
    const currentSection = questionData.section;
    const totalSectionQuestions = sectionCounts[currentSection];
    const playedInSection = countPlayedInSection(currentSection, currentQuestionIndex);
    const remainingInSection = totalSectionQuestions - playedInSection;

    card.innerHTML = `
        <div class="progress-box">
            <p>Gesamtfragen: ${questionNumber} von ${quizData.length} Fragen.</p>
            <p>Abschnitt "${currentSection}": ${remainingInSection} Fragen verbleibend (von ${totalSectionQuestions})</p>
        </div>
        <h2>${questionData.section}</h2>
        
        <div class="image-placeholder">
            [Bild: ${questionData.image_query}]
        </div>
        
        <p class="question-text">${questionData.question}</p>
        
        <div class="options">
            ${questionData.options.map((option, index) => {
                return `
                    <button class="option-btn" data-index="${index}">
                        ${option}
                    </button>
                `;
            }).join('')}
        </div>
        
        <div class="explanation hidden">
            <p><strong>Erklärung:</strong> ${questionData.explanation}</p>
        </div>
    `;
    
    quizArea.innerHTML = '';
    quizArea.appendChild(card);
    
    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', handleAnswer);
    });

    nextButton.classList.add('hidden');
}

function handleAnswer(event) {
    const selectedButton = event.target;
    const selectedIndex = parseInt(selectedButton.dataset.index);
    const question = quizData[currentQuestionIndex];
    const correctIndex = question.answer_index;
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    if (selectedIndex === correctIndex) {
        selectedButton.classList.add('correct');
        selectedButton.innerHTML += ' ✅';
        correctAnswersCount++;
    } else {
        selectedButton.classList.add('incorrect');
        selectedButton.innerHTML += ' ❌';
        
        const correctButton = document.querySelector(`.option-btn[data-index="${correctIndex}"]`);
        correctButton.classList.add('correct');
        correctButton.innerHTML += ' ✅';
        
        incorrectAnswers.push({
            question: question.question,
            selected_option: question.options[selectedIndex],
            correct_option: question.options[correctIndex],
            explanation: question.explanation
        });
    }

    document.querySelector('.explanation').classList.remove('hidden');
    nextButton.classList.remove('hidden');
    nextButton.innerHTML = 'Nächste Frage';
}

const nextQuestionHandler = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion(quizData[currentQuestionIndex]);
    } else {
        displayFinalResult();
    }
};

const restartQuizHandler = () => {
    correctAnswersCount = 0;
    incorrectAnswers = [];
    currentQuestionIndex = 0;
    
    shuffleArray(quizData); 
    
    loadQuestion(quizData[currentQuestionIndex]);
    nextButton.innerHTML = 'Nächste Frage';
    nextButton.removeEventListener('click', restartQuizHandler);
    nextButton.addEventListener('click', nextQuestionHandler);
};

// ====================================================================================
// INITIALISIERUNG UND START
// ====================================================================================

// Event Listener für den Reset-Button im Header
const topResetButton = document.getElementById('reset-top-btn');
if (topResetButton) {
    topResetButton.addEventListener('click', restartQuizHandler);
}

nextButton.addEventListener('click', nextQuestionHandler);

// Initialisierung des Quiz
shuffleArray(quizData);
if (quizData.length > 0) {
    loadQuestion(quizData[currentQuestionIndex]);
} else {
    quizArea.innerHTML = '<p>Fehler: Es wurden keine Fragen geladen.</p>';
}
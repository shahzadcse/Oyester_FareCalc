
import FareCalc from './FareCalc.js';

  let card = new FareCalc();

// ######################################
// #### tests method getCostByZone() ####
// ######################################

describe('Fares:', () => {
  it('returns 2.5 of fare for a trip  - Anywhere in Zone 1', () => {
      expect(card.getCostByZone(1, true)).toBe(2.5);
  });
 
  it('returns 2 of fare for a trip - Any one zone outside zone 1', () => {
    expect(card.getCostByZone(1, false)).toBe(2);
  });
 
  it('returns 3 of fare for a trip - Any two zones including zone 1', () => {
    expect(card.getCostByZone(2, true)).toBe(3);
  });
 
  it('returns 2.25 of fare for a trip - Any two zones excluding zone 1', () => {
    expect(card.getCostByZone(2, false)).toBe(2.25);
  });
 
  it('returns 3.30 of fare for a trip - Any three zones', () => {
    expect(card.getCostByZone(3, true)).toBe(3.30);
  });
});
 
 
// #########################################
// ####  test if user jump the station #####
// #########################################

test("didn't swipe the card previously and exit the station", () => {
	var card = new FareCalc(30);
	card.setNewJourney(FareCalc.STATIONS.EarlsCourt);
	card.exitStation();
	expect(card.getCredit()).toBe(26.7); // It will charge MAX_COST
});
function left_cutout_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[98.0698155,-176.5],[35.5,-176.5]]).appendArc([33.5,-174.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([33.5,-107.5]).appendArc([35.5,-105.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([69.5,-105.5]).appendArc([71.5,-103.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([71.5,-99.5]).appendArc([73.5,-97.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([88.5,-97.5]).appendArc([90.5,-95.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([90.5,-94.5]).appendArc([92.5,-92.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([121.5,-92.5]).appendArc([123.5,-94.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([123.5,-96.5]).appendPoint([159.5,-96.5]).appendArc([161.5,-98.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([161.5,-156.5]).appendPoint([162.0188348,-156.4064543]).appendPoint([184.1109512,-165.7840014]).appendArc([185.1704987,-168.4064734],{"radius":2,"clockwise":true,"large":false}).appendPoint([183.4099683,-172.5540232]).appendPoint([175.3607537,-175.9707121]).appendPoint([178.6602118,-183.7437483]).appendPoint([170.1273503,-203.8459102]).appendArc([167.5048783,-204.9054577],{"radius":2,"clockwise":true,"large":false}).appendPoint([145.6839745,-195.6430336]).appendArc([145.1198721,-195.4958897],{"radius":2,"clockwise":false,"large":false}).appendPoint([135.9424776,-194.4925486]).appendArc([135.8495404,-194.4845762],{"radius":2,"clockwise":false,"large":false}).appendPoint([101.8851454,-192.367505]).appendArc([100.0095938,-190.3612204],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.0697897,-178.5101586]).appendArc([98.0698155,-176.5],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[109.5,-182.75],[123.5,-182.75]]).appendPoint([123.5,-168.75]).appendPoint([109.5,-168.75]).appendPoint([109.5,-182.75]).close().innerToCAG()
.union(
    new CSG.Path2D([[138,-124],[152,-124]]).appendPoint([152,-110]).appendPoint([138,-110]).appendPoint([138,-124]).close().innerToCAG()
).union(
    new CSG.Path2D([[138,-143],[152,-143]]).appendPoint([152,-129]).appendPoint([138,-129]).appendPoint([138,-143]).close().innerToCAG()
).union(
    new CSG.Path2D([[138,-162],[152,-162]]).appendPoint([152,-148]).appendPoint([138,-148]).appendPoint([138,-162]).close().innerToCAG()
).union(
    new CSG.Path2D([[119,-121],[133,-121]]).appendPoint([133,-107]).appendPoint([119,-107]).appendPoint([119,-121]).close().innerToCAG()
).union(
    new CSG.Path2D([[119,-140],[133,-140]]).appendPoint([133,-126]).appendPoint([119,-126]).appendPoint([119,-140]).close().innerToCAG()
).union(
    new CSG.Path2D([[119,-159],[133,-159]]).appendPoint([133,-145]).appendPoint([119,-145]).appendPoint([119,-159]).close().innerToCAG()
).union(
    new CSG.Path2D([[100,-116],[114,-116]]).appendPoint([114,-102]).appendPoint([100,-102]).appendPoint([100,-116]).close().innerToCAG()
).union(
    new CSG.Path2D([[100,-135],[114,-135]]).appendPoint([114,-121]).appendPoint([100,-121]).appendPoint([100,-135]).close().innerToCAG()
).union(
    new CSG.Path2D([[100,-154],[114,-154]]).appendPoint([114,-140]).appendPoint([100,-140]).appendPoint([100,-154]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-121],[95,-121]]).appendPoint([95,-107]).appendPoint([81,-107]).appendPoint([81,-121]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-140],[95,-140]]).appendPoint([95,-126]).appendPoint([81,-126]).appendPoint([81,-140]).close().innerToCAG()
).union(
    new CSG.Path2D([[81,-159],[95,-159]]).appendPoint([95,-145]).appendPoint([81,-145]).appendPoint([81,-159]).close().innerToCAG()
).union(
    new CSG.Path2D([[62,-129],[76,-129]]).appendPoint([76,-115]).appendPoint([62,-115]).appendPoint([62,-129]).close().innerToCAG()
).union(
    new CSG.Path2D([[62,-148],[76,-148]]).appendPoint([76,-134]).appendPoint([62,-134]).appendPoint([62,-148]).close().innerToCAG()
).union(
    new CSG.Path2D([[62,-167],[76,-167]]).appendPoint([76,-153]).appendPoint([62,-153]).appendPoint([62,-167]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-129],[57,-129]]).appendPoint([57,-115]).appendPoint([43,-115]).appendPoint([43,-129]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-148],[57,-148]]).appendPoint([57,-134]).appendPoint([43,-134]).appendPoint([43,-148]).close().innerToCAG()
).union(
    new CSG.Path2D([[43,-167],[57,-167]]).appendPoint([57,-153]).appendPoint([43,-153]).appendPoint([43,-167]).close().innerToCAG()
).union(
    new CSG.Path2D([[130.2863698,-184.1057202],[144.1501228,-186.0541436]]).appendPoint([146.0985462,-172.1903906]).appendPoint([132.2347932,-170.2419672]).appendPoint([130.2863698,-184.1057202]).close().innerToCAG()
).union(
    new CSG.Path2D([[153.2819425,-183.3875443],[166.1690105,-188.8577801]]).appendPoint([171.6392463,-175.9707121]).appendPoint([158.7521783,-170.5004763]).appendPoint([153.2819425,-183.3875443]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function plate_case_fn() {
                    

                // creating part 0 of case plate
                let plate__part_0 = left_cutout_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let plate__part_0_bounds = plate__part_0.getBounds();
                let plate__part_0_x = plate__part_0_bounds[0].x + (plate__part_0_bounds[1].x - plate__part_0_bounds[0].x) / 2
                let plate__part_0_y = plate__part_0_bounds[0].y + (plate__part_0_bounds[1].y - plate__part_0_bounds[0].y) / 2
                plate__part_0 = translate([-plate__part_0_x, -plate__part_0_y, 0], plate__part_0);
                plate__part_0 = rotate([0,0,0], plate__part_0);
                plate__part_0 = translate([plate__part_0_x, plate__part_0_y, 0], plate__part_0);

                plate__part_0 = translate([0,0,0], plate__part_0);
                let result = plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plate_case_fn();
            }

        
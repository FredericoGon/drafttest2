//
// Sealed m19, also for Draft "you"
//
//
function draft() {
    rares.sort(function(){return 0.5 - Math.random()});
    document.getElementById("rare").src = rares[0];
}
function draft2() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("uncommon1").src = uncommon[0];
}
function draft3() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("uncommon2").src = uncommon[0];
    while (document.getElementById("uncommon1").src == document.getElementById("uncommon2").src) {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("uncommon2").src = uncommon[0];
    }
}
function draft4() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("uncommon3").src = uncommon[0];
    while (
        document.getElementById("uncommon3").src == document.getElementById("uncommon2").src
        ||document.getElementById("uncommon3").src == document.getElementById("uncommon1").src)
        {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("uncommon3").src = uncommon[0];
    }
}
function draft5() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common1").src = common[0];
}
function draft6() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common2").src = common[0];
    while(
        document.getElementById("common2").src == document.getElementById("common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common2").src = common[0];
    }
}
function draft7() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common3").src = common[0];
    while (
        document.getElementById("common3").src == document.getElementById("common2").src
        || document.getElementById("common3").src == document.getElementById("common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common3").src = common[0];
    }
}
function draft8() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common4").src = common[0];
    while (
        document.getElementById("common4").src == document.getElementById("common3").src
        ||document.getElementById("common4").src == document.getElementById("common2").src
        ||document.getElementById("common4").src == document.getElementById("common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common4").src = common[0];
    }
}
function draft9() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common5").src = common[0];
    while (
        document.getElementById("common5").src == document.getElementById("common4").src
        ||document.getElementById("common5").src == document.getElementById("common3").src
        ||document.getElementById("common5").src == document.getElementById("common2").src
        ||document.getElementById("common5").src == document.getElementById("common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common5").src = common[0];
    }
}
function draft10() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common6").src = common[0];
    while (
        document.getElementById("common6").src == document.getElementById("common4").src
        ||document.getElementById("common6").src == document.getElementById("common3").src
        ||document.getElementById("common6").src == document.getElementById("common2").src
        ||document.getElementById("common6").src == document.getElementById("common1").src
        ||document.getElementById("common6").src == document.getElementById("common5").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common6").src = common[0];
    }
}
function draft11() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common7").src = common[0];
    while (
        document.getElementById("common7").src == document.getElementById("common4").src
        ||document.getElementById("common7").src == document.getElementById("common3").src
        ||document.getElementById("common7").src == document.getElementById("common2").src
        ||document.getElementById("common7").src == document.getElementById("common1").src
        ||document.getElementById("common7").src == document.getElementById("common5").src
        ||document.getElementById("common7").src == document.getElementById("common6").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common7").src = common[0];
    }
}
function draft12() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common8").src = common[0];
    while (
        document.getElementById("common8").src == document.getElementById("common4").src
        ||document.getElementById("common8").src == document.getElementById("common3").src
        ||document.getElementById("common8").src == document.getElementById("common2").src
        ||document.getElementById("common8").src == document.getElementById("common1").src
        ||document.getElementById("common8").src == document.getElementById("common5").src
        ||document.getElementById("common8").src == document.getElementById("common6").src
        ||document.getElementById("common8").src == document.getElementById("common7").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common8").src = common[0];
    }
}
function draft13() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common9").src = common[0];
    while (
        document.getElementById("common9").src == document.getElementById("common4").src
        ||document.getElementById("common9").src == document.getElementById("common3").src
        ||document.getElementById("common9").src == document.getElementById("common2").src
        ||document.getElementById("common9").src == document.getElementById("common1").src
        ||document.getElementById("common9").src == document.getElementById("common5").src
        ||document.getElementById("common9").src == document.getElementById("common6").src
        ||document.getElementById("common9").src == document.getElementById("common7").src
        ||document.getElementById("common9").src == document.getElementById("common8").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common9").src = common[0];
    }
}
function draft14() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common10").src = common[0];
    while (
        document.getElementById("common10").src == document.getElementById("common4").src
        ||document.getElementById("common10").src == document.getElementById("common3").src
        ||document.getElementById("common10").src == document.getElementById("common2").src
        ||document.getElementById("common10").src == document.getElementById("common1").src
        ||document.getElementById("common10").src == document.getElementById("common5").src
        ||document.getElementById("common10").src == document.getElementById("common6").src
        ||document.getElementById("common10").src == document.getElementById("common7").src
        ||document.getElementById("common10").src == document.getElementById("common8").src
        ||document.getElementById("common10").src == document.getElementById("common9").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common10").src = common[0];
    }
}
function draft15() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("common11").src = common[0];
    while (
        document.getElementById("common11").src == document.getElementById("common4").src
        ||document.getElementById("common11").src == document.getElementById("common3").src
        ||document.getElementById("common11").src == document.getElementById("common2").src
        ||document.getElementById("common11").src == document.getElementById("common1").src
        ||document.getElementById("common11").src == document.getElementById("common5").src
        ||document.getElementById("common11").src == document.getElementById("common6").src
        ||document.getElementById("common11").src == document.getElementById("common7").src
        ||document.getElementById("common11").src == document.getElementById("common8").src
        ||document.getElementById("common11").src == document.getElementById("common9").src
        ||document.getElementById("common11").src == document.getElementById("common10").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("common11").src = common[0];
    }
}
//
// Pokémon Thunderclap
//
//
function pDraft1() {
    pRare.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pRare").src = pRare[0];
}
function pDraft2() {
    pUncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pUncommon1").src = pUncommon[0];
}
function pDraft3() {
    pUncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pUncommon2").src = pUncommon[0];
    while (
        document.getElementById("pUncommon2").src ==  document.getElementById("pUncommon1").src
    ) {
        pUncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pUncommon2").src = pUncommon[0];
    }
    }
function pDraft4() {
    pCommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pCommon1").src = pCommon[0];
}
function pDraft5() {
    pCommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pCommon2").src = pCommon[0];
    while (
        document.getElementById("pCommon2").src == document.getElementById("pCommon1").src
    ) {
        pCommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pCommon2").src = pCommon[0];
    }
}
function pDraft6() {
    pCommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pCommon3").src = pCommon[0];
    while (
        document.getElementById("pCommon3").src == document.getElementById("pCommon2").src
        ||document.getElementById("pCommon3").src == document.getElementById("pCommon1").src
    ) {
        pCommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pCommon3").src = pCommon[0];
    }
}
//
// Test
//
//
function tDraft1() {
    test.sort(function(){return 0.5 - Math.random()});
    document.getElementById("tTest1").src = test[0];
}
function tDraft2() {
    test.sort(function(){return 0.5 - Math.random()});
    document.getElementById("tTest2").src = test[0];
    while (document.getElementById("tTest1").src == document.getElementById("tTest2").src) {
        test.sort(function(){return 0.5 - Math.random()});
        document.getElementById("tTest2").src = test[0];
    }
}
//
// Draft / Pod1
//
//
function pod1draft1() {
    rares.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1rare").src = rares[0];
}
function pod1draft2() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1uncommon1").src = uncommon[0];
}
function pod1draft3() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1uncommon2").src = uncommon[0];
    while (document.getElementById("pod1uncommon1").src == document.getElementById("pod1uncommon2").src) {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1uncommon2").src = uncommon[0];
    }
}
function pod1draft4() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1uncommon3").src = uncommon[0];
    while (
        document.getElementById("pod1uncommon3").src == document.getElementById("pod1uncommon2").src
        ||document.getElementById("pod1uncommon3").src == document.getElementById("pod1uncommon1").src)
        {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1uncommon3").src = uncommon[0];
    }
}
function pod1draft5() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common1").src = common[0];
}
function pod1draft6() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common2").src = common[0];
    while(
        document.getElementById("pod1common2").src == document.getElementById("pod1common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common2").src = common[0];
    }
}
function pod1draft7() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common3").src = common[0];
    while (
        document.getElementById("pod1common3").src == document.getElementById("pod1common2").src
        || document.getElementById("pod1common3").src == document.getElementById("pod1common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common3").src = common[0];
    }
}
function pod1draft8() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common4").src = common[0];
    while (
        document.getElementById("pod1common4").src == document.getElementById("pod1common3").src
        ||document.getElementById("pod1common4").src == document.getElementById("pod1common2").src
        ||document.getElementById("pod1common4").src == document.getElementById("pod1common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common4").src = common[0];
    }
}
function pod1draft9() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common5").src = common[0];
    while (
        document.getElementById("pod1common5").src == document.getElementById("pod1common4").src
        ||document.getElementById("pod1common5").src == document.getElementById("pod1common3").src
        ||document.getElementById("pod1common5").src == document.getElementById("pod1common2").src
        ||document.getElementById("pod1common5").src == document.getElementById("pod1common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common5").src = common[0];
    }
}
function pod1draft10() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common6").src = common[0];
    while (
        document.getElementById("pod1common6").src == document.getElementById("pod1common4").src
        ||document.getElementById("pod1common6").src == document.getElementById("pod1common3").src
        ||document.getElementById("pod1common6").src == document.getElementById("pod1common2").src
        ||document.getElementById("pod1common6").src == document.getElementById("pod1common1").src
        ||document.getElementById("pod1common6").src == document.getElementById("pod1common5").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common6").src = common[0];
    }
}
function pod1draft11() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common7").src = common[0];
    while (
        document.getElementById("pod1common7").src == document.getElementById("pod1common4").src
        ||document.getElementById("pod1common7").src == document.getElementById("pod1common3").src
        ||document.getElementById("pod1common7").src == document.getElementById("pod1common2").src
        ||document.getElementById("pod1common7").src == document.getElementById("pod1common1").src
        ||document.getElementById("pod1common7").src == document.getElementById("pod1common5").src
        ||document.getElementById("pod1common7").src == document.getElementById("pod1common6").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common7").src = common[0];
    }
}
function pod1draft12() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common8").src = common[0];
    while (
        document.getElementById("pod1common8").src == document.getElementById("pod1common4").src
        ||document.getElementById("pod1common8").src == document.getElementById("pod1common3").src
        ||document.getElementById("pod1common8").src == document.getElementById("pod1common2").src
        ||document.getElementById("pod1common8").src == document.getElementById("pod1common1").src
        ||document.getElementById("pod1common8").src == document.getElementById("pod1common5").src
        ||document.getElementById("pod1common8").src == document.getElementById("pod1common6").src
        ||document.getElementById("pod1common8").src == document.getElementById("pod1common7").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common8").src = common[0];
    }
}
function pod1draft13() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common9").src = common[0];
    while (
        document.getElementById("pod1common9").src == document.getElementById("pod1common4").src
        ||document.getElementById("pod1common9").src == document.getElementById("pod1common3").src
        ||document.getElementById("pod1common9").src == document.getElementById("pod1common2").src
        ||document.getElementById("pod1common9").src == document.getElementById("pod1common1").src
        ||document.getElementById("pod1common9").src == document.getElementById("pod1common5").src
        ||document.getElementById("pod1common9").src == document.getElementById("pod1common6").src
        ||document.getElementById("pod1common9").src == document.getElementById("pod1common7").src
        ||document.getElementById("pod1common9").src == document.getElementById("pod1common8").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common9").src = common[0];
    }
}
function pod1draft14() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common10").src = common[0];
    while (
        document.getElementById("pod1common10").src == document.getElementById("pod1common4").src
        ||document.getElementById("pod1common10").src == document.getElementById("pod1common3").src
        ||document.getElementById("pod1common10").src == document.getElementById("pod1common2").src
        ||document.getElementById("pod1common10").src == document.getElementById("pod1common1").src
        ||document.getElementById("pod1common10").src == document.getElementById("pod1common5").src
        ||document.getElementById("pod1common10").src == document.getElementById("pod1common6").src
        ||document.getElementById("pod1common10").src == document.getElementById("pod1common7").src
        ||document.getElementById("pod1common10").src == document.getElementById("pod1common8").src
        ||document.getElementById("pod1common10").src == document.getElementById("pod1common9").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common10").src = common[0];
    }
}
function pod1draft15() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod1common11").src = common[0];
    while (
        document.getElementById("pod1common11").src == document.getElementById("pod1common4").src
        ||document.getElementById("pod1common11").src == document.getElementById("pod1common3").src
        ||document.getElementById("pod1common11").src == document.getElementById("pod1common2").src
        ||document.getElementById("pod1common11").src == document.getElementById("pod1common1").src
        ||document.getElementById("pod1common11").src == document.getElementById("pod1common5").src
        ||document.getElementById("pod1common11").src == document.getElementById("pod1common6").src
        ||document.getElementById("pod1common11").src == document.getElementById("pod1common7").src
        ||document.getElementById("pod1common11").src == document.getElementById("pod1common8").src
        ||document.getElementById("pod1common11").src == document.getElementById("pod1common9").src
        ||document.getElementById("pod1common11").src == document.getElementById("pod1common10").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod1common11").src = common[0];
    }
}
//
// Draft / Pod2
//
//
function pod2draft1() {
    rares.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2rare").src = rares[0];
}
function pod2draft2() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2uncommon1").src = uncommon[0];
}
function pod2draft3() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2uncommon2").src = uncommon[0];
    while (document.getElementById("pod2uncommon1").src == document.getElementById("pod2uncommon2").src) {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2uncommon2").src = uncommon[0];
    }
}
function pod2draft4() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2uncommon3").src = uncommon[0];
    while (
        document.getElementById("pod2uncommon3").src == document.getElementById("pod2uncommon2").src
        ||document.getElementById("pod2uncommon3").src == document.getElementById("pod2uncommon1").src)
        {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2uncommon3").src = uncommon[0];
    }
}
function pod2draft5() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common1").src = common[0];
}
function pod2draft6() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common2").src = common[0];
    while(
        document.getElementById("pod2common2").src == document.getElementById("pod2common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common2").src = common[0];
    }
}
function pod2draft7() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common3").src = common[0];
    while (
        document.getElementById("pod2common3").src == document.getElementById("pod2common2").src
        || document.getElementById("pod2common3").src == document.getElementById("pod2common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common3").src = common[0];
    }
}
function pod2draft8() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common4").src = common[0];
    while (
        document.getElementById("pod2common4").src == document.getElementById("pod2common3").src
        ||document.getElementById("pod2common4").src == document.getElementById("pod2common2").src
        ||document.getElementById("pod2common4").src == document.getElementById("pod2common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common4").src = common[0];
    }
}
function pod2draft9() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common5").src = common[0];
    while (
        document.getElementById("pod2common5").src == document.getElementById("pod2common4").src
        ||document.getElementById("pod2common5").src == document.getElementById("pod2common3").src
        ||document.getElementById("pod2common5").src == document.getElementById("pod2common2").src
        ||document.getElementById("pod2common5").src == document.getElementById("pod2common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common5").src = common[0];
    }
}
function pod2draft10() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common6").src = common[0];
    while (
        document.getElementById("pod2common6").src == document.getElementById("pod2common4").src
        ||document.getElementById("pod2common6").src == document.getElementById("pod2common3").src
        ||document.getElementById("pod2common6").src == document.getElementById("pod2common2").src
        ||document.getElementById("pod2common6").src == document.getElementById("pod2common1").src
        ||document.getElementById("pod2common6").src == document.getElementById("pod2common5").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common6").src = common[0];
    }
}
function pod2draft11() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common7").src = common[0];
    while (
        document.getElementById("pod2common7").src == document.getElementById("pod2common4").src
        ||document.getElementById("pod2common7").src == document.getElementById("pod2common3").src
        ||document.getElementById("pod2common7").src == document.getElementById("pod2common2").src
        ||document.getElementById("pod2common7").src == document.getElementById("pod2common1").src
        ||document.getElementById("pod2common7").src == document.getElementById("pod2common5").src
        ||document.getElementById("pod2common7").src == document.getElementById("pod2common6").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common7").src = common[0];
    }
}
function pod2draft12() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common8").src = common[0];
    while (
        document.getElementById("pod2common8").src == document.getElementById("pod2common4").src
        ||document.getElementById("pod2common8").src == document.getElementById("pod2common3").src
        ||document.getElementById("pod2common8").src == document.getElementById("pod2common2").src
        ||document.getElementById("pod2common8").src == document.getElementById("pod2common1").src
        ||document.getElementById("pod2common8").src == document.getElementById("pod2common5").src
        ||document.getElementById("pod2common8").src == document.getElementById("pod2common6").src
        ||document.getElementById("pod2common8").src == document.getElementById("pod2common7").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common8").src = common[0];
    }
}
function pod2draft13() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common9").src = common[0];
    while (
        document.getElementById("pod2common9").src == document.getElementById("pod2common4").src
        ||document.getElementById("pod2common9").src == document.getElementById("pod2common3").src
        ||document.getElementById("pod2common9").src == document.getElementById("pod2common2").src
        ||document.getElementById("pod2common9").src == document.getElementById("pod2common1").src
        ||document.getElementById("pod2common9").src == document.getElementById("pod2common5").src
        ||document.getElementById("pod2common9").src == document.getElementById("pod2common6").src
        ||document.getElementById("pod2common9").src == document.getElementById("pod2common7").src
        ||document.getElementById("pod2common9").src == document.getElementById("pod2common8").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common9").src = common[0];
    }
}
function pod2draft14() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common10").src = common[0];
    while (
        document.getElementById("pod2common10").src == document.getElementById("pod2common4").src
        ||document.getElementById("pod2common10").src == document.getElementById("pod2common3").src
        ||document.getElementById("pod2common10").src == document.getElementById("pod2common2").src
        ||document.getElementById("pod2common10").src == document.getElementById("pod2common1").src
        ||document.getElementById("pod2common10").src == document.getElementById("pod2common5").src
        ||document.getElementById("pod2common10").src == document.getElementById("pod2common6").src
        ||document.getElementById("pod2common10").src == document.getElementById("pod2common7").src
        ||document.getElementById("pod2common10").src == document.getElementById("pod2common8").src
        ||document.getElementById("pod2common10").src == document.getElementById("pod2common9").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common10").src = common[0];
    }
}
function pod2draft15() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod2common11").src = common[0];
    while (
        document.getElementById("pod2common11").src == document.getElementById("pod2common4").src
        ||document.getElementById("pod2common11").src == document.getElementById("pod2common3").src
        ||document.getElementById("pod2common11").src == document.getElementById("pod2common2").src
        ||document.getElementById("pod2common11").src == document.getElementById("pod2common1").src
        ||document.getElementById("pod2common11").src == document.getElementById("pod2common5").src
        ||document.getElementById("pod2common11").src == document.getElementById("pod2common6").src
        ||document.getElementById("pod2common11").src == document.getElementById("pod2common7").src
        ||document.getElementById("pod2common11").src == document.getElementById("pod2common8").src
        ||document.getElementById("pod2common11").src == document.getElementById("pod2common9").src
        ||document.getElementById("pod2common11").src == document.getElementById("pod2common10").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod2common11").src = common[0];
    }
}
//
// Draft / Pod3
//
//
function pod3draft1() {
    rares.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3rare").src = rares[0];
}
function pod3draft2() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3uncommon1").src = uncommon[0];
}
function pod3draft3() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3uncommon2").src = uncommon[0];
    while (document.getElementById("pod3uncommon1").src == document.getElementById("pod3uncommon2").src) {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3uncommon2").src = uncommon[0];
    }
}
function pod3draft4() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3uncommon3").src = uncommon[0];
    while (
        document.getElementById("pod3uncommon3").src == document.getElementById("pod3uncommon2").src
        ||document.getElementById("pod3uncommon3").src == document.getElementById("pod3uncommon1").src)
        {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3uncommon3").src = uncommon[0];
    }
}
function pod3draft5() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common1").src = common[0];
}
function pod3draft6() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common2").src = common[0];
    while(
        document.getElementById("pod3common2").src == document.getElementById("pod3common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common2").src = common[0];
    }
}
function pod3draft7() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common3").src = common[0];
    while (
        document.getElementById("pod3common3").src == document.getElementById("pod3common2").src
        || document.getElementById("pod3common3").src == document.getElementById("pod3common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common3").src = common[0];
    }
}
function pod3draft8() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common4").src = common[0];
    while (
        document.getElementById("pod3common4").src == document.getElementById("pod3common3").src
        ||document.getElementById("pod3common4").src == document.getElementById("pod3common2").src
        ||document.getElementById("pod3common4").src == document.getElementById("pod3common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common4").src = common[0];
    }
}
function pod3draft9() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common5").src = common[0];
    while (
        document.getElementById("pod3common5").src == document.getElementById("pod3common4").src
        ||document.getElementById("pod3common5").src == document.getElementById("pod3common3").src
        ||document.getElementById("pod3common5").src == document.getElementById("pod3common2").src
        ||document.getElementById("pod3common5").src == document.getElementById("pod3common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common5").src = common[0];
    }
}
function pod3draft10() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common6").src = common[0];
    while (
        document.getElementById("pod3common6").src == document.getElementById("pod3common4").src
        ||document.getElementById("pod3common6").src == document.getElementById("pod3common3").src
        ||document.getElementById("pod3common6").src == document.getElementById("pod3common2").src
        ||document.getElementById("pod3common6").src == document.getElementById("pod3common1").src
        ||document.getElementById("pod3common6").src == document.getElementById("pod3common5").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common6").src = common[0];
    }
}
function pod3draft11() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common7").src = common[0];
    while (
        document.getElementById("pod3common7").src == document.getElementById("pod3common4").src
        ||document.getElementById("pod3common7").src == document.getElementById("pod3common3").src
        ||document.getElementById("pod3common7").src == document.getElementById("pod3common2").src
        ||document.getElementById("pod3common7").src == document.getElementById("pod3common1").src
        ||document.getElementById("pod3common7").src == document.getElementById("pod3common5").src
        ||document.getElementById("pod3common7").src == document.getElementById("pod3common6").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common7").src = common[0];
    }
}
function pod3draft12() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common8").src = common[0];
    while (
        document.getElementById("pod3common8").src == document.getElementById("pod3common4").src
        ||document.getElementById("pod3common8").src == document.getElementById("pod3common3").src
        ||document.getElementById("pod3common8").src == document.getElementById("pod3common2").src
        ||document.getElementById("pod3common8").src == document.getElementById("pod3common1").src
        ||document.getElementById("pod3common8").src == document.getElementById("pod3common5").src
        ||document.getElementById("pod3common8").src == document.getElementById("pod3common6").src
        ||document.getElementById("pod3common8").src == document.getElementById("pod3common7").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common8").src = common[0];
    }
}
function pod3draft13() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common9").src = common[0];
    while (
        document.getElementById("pod3common9").src == document.getElementById("pod3common4").src
        ||document.getElementById("pod3common9").src == document.getElementById("pod3common3").src
        ||document.getElementById("pod3common9").src == document.getElementById("pod3common2").src
        ||document.getElementById("pod3common9").src == document.getElementById("pod3common1").src
        ||document.getElementById("pod3common9").src == document.getElementById("pod3common5").src
        ||document.getElementById("pod3common9").src == document.getElementById("pod3common6").src
        ||document.getElementById("pod3common9").src == document.getElementById("pod3common7").src
        ||document.getElementById("pod3common9").src == document.getElementById("pod3common8").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common9").src = common[0];
    }
}
function pod3draft14() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common10").src = common[0];
    while (
        document.getElementById("pod3common10").src == document.getElementById("pod3common4").src
        ||document.getElementById("pod3common10").src == document.getElementById("pod3common3").src
        ||document.getElementById("pod3common10").src == document.getElementById("pod3common2").src
        ||document.getElementById("pod3common10").src == document.getElementById("pod3common1").src
        ||document.getElementById("pod3common10").src == document.getElementById("pod3common5").src
        ||document.getElementById("pod3common10").src == document.getElementById("pod3common6").src
        ||document.getElementById("pod3common10").src == document.getElementById("pod3common7").src
        ||document.getElementById("pod3common10").src == document.getElementById("pod3common8").src
        ||document.getElementById("pod3common10").src == document.getElementById("pod3common9").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common10").src = common[0];
    }
}
function pod3draft15() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod3common11").src = common[0];
    while (
        document.getElementById("pod3common11").src == document.getElementById("pod3common4").src
        ||document.getElementById("pod3common11").src == document.getElementById("pod3common3").src
        ||document.getElementById("pod3common11").src == document.getElementById("pod3common2").src
        ||document.getElementById("pod3common11").src == document.getElementById("pod3common1").src
        ||document.getElementById("pod3common11").src == document.getElementById("pod3common5").src
        ||document.getElementById("pod3common11").src == document.getElementById("pod3common6").src
        ||document.getElementById("pod3common11").src == document.getElementById("pod3common7").src
        ||document.getElementById("pod3common11").src == document.getElementById("pod3common8").src
        ||document.getElementById("pod3common11").src == document.getElementById("pod3common9").src
        ||document.getElementById("pod3common11").src == document.getElementById("pod3common10").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod3common11").src = common[0];
    }
}
//
// Draft / Pod4
//
//
function pod4draft1() {
    rares.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4rare").src = rares[0];
}
function pod4draft2() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4uncommon1").src = uncommon[0];
}
function pod4draft3() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4uncommon2").src = uncommon[0];
    while (document.getElementById("pod4uncommon1").src == document.getElementById("pod4uncommon2").src) {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4uncommon2").src = uncommon[0];
    }
}
function pod4draft4() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4uncommon3").src = uncommon[0];
    while (
        document.getElementById("pod4uncommon3").src == document.getElementById("pod4uncommon2").src
        ||document.getElementById("pod4uncommon3").src == document.getElementById("pod4uncommon1").src)
        {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4uncommon3").src = uncommon[0];
    }
}
function pod4draft5() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common1").src = common[0];
}
function pod4draft6() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common2").src = common[0];
    while(
        document.getElementById("pod4common2").src == document.getElementById("pod4common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common2").src = common[0];
    }
}
function pod4draft7() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common3").src = common[0];
    while (
        document.getElementById("pod4common3").src == document.getElementById("pod4common2").src
        || document.getElementById("pod4common3").src == document.getElementById("pod4common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common3").src = common[0];
    }
}
function pod4draft8() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common4").src = common[0];
    while (
        document.getElementById("pod4common4").src == document.getElementById("pod4common3").src
        ||document.getElementById("pod4common4").src == document.getElementById("pod4common2").src
        ||document.getElementById("pod4common4").src == document.getElementById("pod4common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common4").src = common[0];
    }
}
function pod4draft9() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common5").src = common[0];
    while (
        document.getElementById("pod4common5").src == document.getElementById("pod4common4").src
        ||document.getElementById("pod4common5").src == document.getElementById("pod4common3").src
        ||document.getElementById("pod4common5").src == document.getElementById("pod4common2").src
        ||document.getElementById("pod4common5").src == document.getElementById("pod4common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common5").src = common[0];
    }
}
function pod4draft10() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common6").src = common[0];
    while (
        document.getElementById("pod4common6").src == document.getElementById("pod4common4").src
        ||document.getElementById("pod4common6").src == document.getElementById("pod4common3").src
        ||document.getElementById("pod4common6").src == document.getElementById("pod4common2").src
        ||document.getElementById("pod4common6").src == document.getElementById("pod4common1").src
        ||document.getElementById("pod4common6").src == document.getElementById("pod4common5").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common6").src = common[0];
    }
}
function pod4draft11() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common7").src = common[0];
    while (
        document.getElementById("pod4common7").src == document.getElementById("pod4common4").src
        ||document.getElementById("pod4common7").src == document.getElementById("pod4common3").src
        ||document.getElementById("pod4common7").src == document.getElementById("pod4common2").src
        ||document.getElementById("pod4common7").src == document.getElementById("pod4common1").src
        ||document.getElementById("pod4common7").src == document.getElementById("pod4common5").src
        ||document.getElementById("pod4common7").src == document.getElementById("pod4common6").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common7").src = common[0];
    }
}
function pod4draft12() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common8").src = common[0];
    while (
        document.getElementById("pod4common8").src == document.getElementById("pod4common4").src
        ||document.getElementById("pod4common8").src == document.getElementById("pod4common3").src
        ||document.getElementById("pod4common8").src == document.getElementById("pod4common2").src
        ||document.getElementById("pod4common8").src == document.getElementById("pod4common1").src
        ||document.getElementById("pod4common8").src == document.getElementById("pod4common5").src
        ||document.getElementById("pod4common8").src == document.getElementById("pod4common6").src
        ||document.getElementById("pod4common8").src == document.getElementById("pod4common7").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common8").src = common[0];
    }
}
function pod4draft13() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common9").src = common[0];
    while (
        document.getElementById("pod4common9").src == document.getElementById("pod4common4").src
        ||document.getElementById("pod4common9").src == document.getElementById("pod4common3").src
        ||document.getElementById("pod4common9").src == document.getElementById("pod4common2").src
        ||document.getElementById("pod4common9").src == document.getElementById("pod4common1").src
        ||document.getElementById("pod4common9").src == document.getElementById("pod4common5").src
        ||document.getElementById("pod4common9").src == document.getElementById("pod4common6").src
        ||document.getElementById("pod4common9").src == document.getElementById("pod4common7").src
        ||document.getElementById("pod4common9").src == document.getElementById("pod4common8").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common9").src = common[0];
    }
}
function pod4draft14() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common10").src = common[0];
    while (
        document.getElementById("pod4common10").src == document.getElementById("pod4common4").src
        ||document.getElementById("pod4common10").src == document.getElementById("pod4common3").src
        ||document.getElementById("pod4common10").src == document.getElementById("pod4common2").src
        ||document.getElementById("pod4common10").src == document.getElementById("pod4common1").src
        ||document.getElementById("pod4common10").src == document.getElementById("pod4common5").src
        ||document.getElementById("pod4common10").src == document.getElementById("pod4common6").src
        ||document.getElementById("pod4common10").src == document.getElementById("pod4common7").src
        ||document.getElementById("pod4common10").src == document.getElementById("pod4common8").src
        ||document.getElementById("pod4common10").src == document.getElementById("pod4common9").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common10").src = common[0];
    }
}
function pod4draft15() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod4common11").src = common[0];
    while (
        document.getElementById("pod4common11").src == document.getElementById("pod4common4").src
        ||document.getElementById("pod4common11").src == document.getElementById("pod4common3").src
        ||document.getElementById("pod4common11").src == document.getElementById("pod4common2").src
        ||document.getElementById("pod4common11").src == document.getElementById("pod4common1").src
        ||document.getElementById("pod4common11").src == document.getElementById("pod4common5").src
        ||document.getElementById("pod4common11").src == document.getElementById("pod4common6").src
        ||document.getElementById("pod4common11").src == document.getElementById("pod4common7").src
        ||document.getElementById("pod4common11").src == document.getElementById("pod4common8").src
        ||document.getElementById("pod4common11").src == document.getElementById("pod4common9").src
        ||document.getElementById("pod4common11").src == document.getElementById("pod4common10").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod4common11").src = common[0];
    }
}
//
// Draft / Pod5
//
//
function pod5draft1() {
    rares.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5rare").src = rares[0];
}
function pod5draft2() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5uncommon1").src = uncommon[0];
}
function pod5draft3() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5uncommon2").src = uncommon[0];
    while (document.getElementById("pod5uncommon1").src == document.getElementById("pod5uncommon2").src) {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5uncommon2").src = uncommon[0];
    }
}
function pod5draft4() {
    uncommon.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5uncommon3").src = uncommon[0];
    while (
        document.getElementById("pod5uncommon3").src == document.getElementById("pod5uncommon2").src
        ||document.getElementById("pod5uncommon3").src == document.getElementById("pod5uncommon1").src)
        {
        uncommon.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5uncommon3").src = uncommon[0];
    }
}
function pod5draft5() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common1").src = common[0];
}
function pod5draft6() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common2").src = common[0];
    while(
        document.getElementById("pod5common2").src == document.getElementById("pod5common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common2").src = common[0];
    }
}
function pod5draft7() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common3").src = common[0];
    while (
        document.getElementById("pod5common3").src == document.getElementById("pod5common2").src
        || document.getElementById("pod5common3").src == document.getElementById("pod5common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common3").src = common[0];
    }
}
function pod5draft8() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common4").src = common[0];
    while (
        document.getElementById("pod5common4").src == document.getElementById("pod5common3").src
        ||document.getElementById("pod5common4").src == document.getElementById("pod5common2").src
        ||document.getElementById("pod5common4").src == document.getElementById("pod5common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common4").src = common[0];
    }
}
function pod5draft9() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common5").src = common[0];
    while (
        document.getElementById("pod5common5").src == document.getElementById("pod5common4").src
        ||document.getElementById("pod5common5").src == document.getElementById("pod5common3").src
        ||document.getElementById("pod5common5").src == document.getElementById("pod5common2").src
        ||document.getElementById("pod5common5").src == document.getElementById("pod5common1").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common5").src = common[0];
    }
}
function pod5draft10() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common6").src = common[0];
    while (
        document.getElementById("pod5common6").src == document.getElementById("pod5common4").src
        ||document.getElementById("pod5common6").src == document.getElementById("pod5common3").src
        ||document.getElementById("pod5common6").src == document.getElementById("pod5common2").src
        ||document.getElementById("pod5common6").src == document.getElementById("pod5common1").src
        ||document.getElementById("pod5common6").src == document.getElementById("pod5common5").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common6").src = common[0];
    }
}
function pod5draft11() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common7").src = common[0];
    while (
        document.getElementById("pod5common7").src == document.getElementById("pod5common4").src
        ||document.getElementById("pod5common7").src == document.getElementById("pod5common3").src
        ||document.getElementById("pod5common7").src == document.getElementById("pod5common2").src
        ||document.getElementById("pod5common7").src == document.getElementById("pod5common1").src
        ||document.getElementById("pod5common7").src == document.getElementById("pod5common5").src
        ||document.getElementById("pod5common7").src == document.getElementById("pod5common6").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common7").src = common[0];
    }
}
function pod5draft12() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common8").src = common[0];
    while (
        document.getElementById("pod5common8").src == document.getElementById("pod5common4").src
        ||document.getElementById("pod5common8").src == document.getElementById("pod5common3").src
        ||document.getElementById("pod5common8").src == document.getElementById("pod5common2").src
        ||document.getElementById("pod5common8").src == document.getElementById("pod5common1").src
        ||document.getElementById("pod5common8").src == document.getElementById("pod5common5").src
        ||document.getElementById("pod5common8").src == document.getElementById("pod5common6").src
        ||document.getElementById("pod5common8").src == document.getElementById("pod5common7").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common8").src = common[0];
    }
}
function pod5draft13() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common9").src = common[0];
    while (
        document.getElementById("pod5common9").src == document.getElementById("pod5common4").src
        ||document.getElementById("pod5common9").src == document.getElementById("pod5common3").src
        ||document.getElementById("pod5common9").src == document.getElementById("pod5common2").src
        ||document.getElementById("pod5common9").src == document.getElementById("pod5common1").src
        ||document.getElementById("pod5common9").src == document.getElementById("pod5common5").src
        ||document.getElementById("pod5common9").src == document.getElementById("pod5common6").src
        ||document.getElementById("pod5common9").src == document.getElementById("pod5common7").src
        ||document.getElementById("pod5common9").src == document.getElementById("pod5common8").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common9").src = common[0];
    }
}
function pod5draft14() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common10").src = common[0];
    while (
        document.getElementById("pod5common10").src == document.getElementById("pod5common4").src
        ||document.getElementById("pod5common10").src == document.getElementById("pod5common3").src
        ||document.getElementById("pod5common10").src == document.getElementById("pod5common2").src
        ||document.getElementById("pod5common10").src == document.getElementById("pod5common1").src
        ||document.getElementById("pod5common10").src == document.getElementById("pod5common5").src
        ||document.getElementById("pod5common10").src == document.getElementById("pod5common6").src
        ||document.getElementById("pod5common10").src == document.getElementById("pod5common7").src
        ||document.getElementById("pod5common10").src == document.getElementById("pod5common8").src
        ||document.getElementById("pod5common10").src == document.getElementById("pod5common9").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common10").src = common[0];
    }
}
function pod5draft15() {
    common.sort(function(){return 0.5 - Math.random()});
    document.getElementById("pod5common11").src = common[0];
    while (
        document.getElementById("pod5common11").src == document.getElementById("pod5common4").src
        ||document.getElementById("pod5common11").src == document.getElementById("pod5common3").src
        ||document.getElementById("pod5common11").src == document.getElementById("pod5common2").src
        ||document.getElementById("pod5common11").src == document.getElementById("pod5common1").src
        ||document.getElementById("pod5common11").src == document.getElementById("pod5common5").src
        ||document.getElementById("pod5common11").src == document.getElementById("pod5common6").src
        ||document.getElementById("pod5common11").src == document.getElementById("pod5common7").src
        ||document.getElementById("pod5common11").src == document.getElementById("pod5common8").src
        ||document.getElementById("pod5common11").src == document.getElementById("pod5common9").src
        ||document.getElementById("pod5common11").src == document.getElementById("pod5common10").src
    ) {
        common.sort(function(){return 0.5 - Math.random()});
        document.getElementById("pod5common11").src = common[0];
    }
}
//
// Draft Pick - Test
//
//
function pick1 (){
    var img = document.createElement('img');
    img.src = document.getElementById("tTest1").src;
    document.getElementById('choise2').appendChild(img);
    document.getElementById("tTest1").src = "https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/f/f8/Magic_card_back.jpg"
}
function pick2 (){
    var img = document.createElement('img');
    img.src = document.getElementById("tTest2").src;
    document.getElementById('choise2').appendChild(img);
    document.getElementById("tTest2").src = "https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/f/f8/Magic_card_back.jpg"
}
//
// Sealed Pick - Test
//
//
function pickrare1 (){
    var img = document.createElement('img');
    img.src = document.getElementById("tTest1").src;
    document.getElementById('choise2').appendChild(img);
    document.getElementById("tTest1").src = "https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/f/f8/Magic_card_back.jpg"
}
//
// Arrays
//
//
var rares = [
    "http://mythicspoiler.com/m19/cards/ajaniadversaryoftyrants1.jpg",
    "http://mythicspoiler.com/m19/cards/tezzeretartificemaster1.jpg",
    "http://mythicspoiler.com/m19/cards/lilianauntouchedbydeath1.jpg",
    "http://mythicspoiler.com/m19/cards/sarkhanfireblood.jpg",
    "http://mythicspoiler.com/m19/cards/resplendentangel1.jpg",
    "http://mythicspoiler.com/m19/cards/omniscience.jpg",
    "http://mythicspoiler.com/m19/cards/bonedragon.jpg",
    "http://mythicspoiler.com/m19/cards/apexofpower1.jpg",
    "http://mythicspoiler.com/m19/cards/scapeshift.jpg",
    "http://mythicspoiler.com/m19/cards/arcadesthestrategist1.jpg",
    "http://mythicspoiler.com/m19/cards/chromiumthemutable.jpg",
    "http://mythicspoiler.com/m19/cards/nicolbolastheravager1.jpg",
    "http://mythicspoiler.com/m19/cards/palladiamorstheruiner.jpg",
    "http://mythicspoiler.com/m19/cards/vaevictisasmadithedire1.jpg",
    "http://mythicspoiler.com/m19/cards/crucibleofworlds.jpg",
    "http://mythicspoiler.com/m19/cards/isolate.jpg",
    "http://mythicspoiler.com/m19/cards/frayingomnipotence.jpg",
    "http://mythicspoiler.com/m19/cards/dismissivepyromancer.jpg",
    "http://mythicspoiler.com/m19/cards/thornlieutenant1.jpg",
    "http://mythicspoiler.com/m19/cards/lenaselflesschampion.jpg",
    "http://mythicspoiler.com/m19/cards/djinnofwishes.jpg",
    "http://mythicspoiler.com/m19/cards/graveyardmarshal1.jpg",
    "http://mythicspoiler.com/m19/cards/demandingdragon.jpg",
    "http://mythicspoiler.com/m19/cards/runicarmasaur1.jpg",
    "http://mythicspoiler.com/m19/cards/leoninwarleader.jpg",
    "http://mythicspoiler.com/m19/cards/mysticarcheologist1.jpg",
    "http://mythicspoiler.com/m19/cards/lilianascontract1.jpg",
    "http://mythicspoiler.com/m19/cards/spitflame.jpg",
    "http://mythicspoiler.com/m19/cards/goreclawterrorofqalsisma1.jpg",
    "http://mythicspoiler.com/m19/cards/valiantknight.jpg",
    "http://mythicspoiler.com/m19/cards/supremephantom1.jpg",
    "http://mythicspoiler.com/m19/cards/phylacterylich1.jpg",
    "http://mythicspoiler.com/m19/cards/goblintrashmaster.jpg",
    "http://mythicspoiler.com/m19/cards/hungeringhydra.jpg",
    "http://mythicspoiler.com/m19/cards/cleansingnova.jpg",
    "http://mythicspoiler.com/m19/cards/saimasterthopterist1.jpg",
    "http://mythicspoiler.com/m19/cards/openthegraves.jpg",
    "http://mythicspoiler.com/m19/cards/banefire1.jpg",
    "http://mythicspoiler.com/m19/cards/elvishclancaller.jpg",
    "http://mythicspoiler.com/m19/cards/remorsefulcleric.jpg",
    "http://mythicspoiler.com/m19/cards/onewiththemachine.jpg",
    "http://mythicspoiler.com/m19/cards/deathbaron1.jpg",
    "http://mythicspoiler.com/m19/cards/sarkhansunsealing.jpg",
    "http://mythicspoiler.com/m19/cards/gigantosaurus.jpg",
    "http://mythicspoiler.com/m19/cards/ajanislaststand1.jpg",
    "http://mythicspoiler.com/m19/cards/mistcaller1.jpg",
    "http://mythicspoiler.com/m19/cards/demonofcatastrophes1.jpg",
    "http://mythicspoiler.com/m19/cards/alpinemoon1.jpg",
    "http://mythicspoiler.com/m19/cards/pelakkawurm1.jpg",
    "http://mythicspoiler.com/m19/cards/mentorofthemeek.jpg",
    "http://mythicspoiler.com/m19/cards/metamorphicalteration2.jpg",
    "http://mythicspoiler.com/m19/cards/infernalreckoning.jpg",
    "http://mythicspoiler.com/m19/cards/darkdwelleroracle.jpg",
    "http://mythicspoiler.com/m19/cards/prodigiousgrowth1.jpg",
    "http://mythicspoiler.com/m19/cards/suncleanser1.jpg",
    "http://mythicspoiler.com/m19/cards/patientrebuilding.jpg",
    "http://mythicspoiler.com/m19/cards/isareththeawakener1.jpg",
    "http://mythicspoiler.com/m19/cards/lathlissdragonqueen1.jpg",
    "http://mythicspoiler.com/m19/cards/viviensinvocation.jpg",
    "http://mythicspoiler.com/m19/cards/windreadersphinx.jpg",
    "http://mythicspoiler.com/m19/cards/chaoswand.jpg",
    "http://mythicspoiler.com/m19/cards/dragonshoard.jpg",
    "http://mythicspoiler.com/m19/cards/amuletofsafekeeping.jpg",
    "http://mythicspoiler.com/m19/cards/desecratedtomb1.jpg",
    "http://mythicspoiler.com/m19/cards/magistratesscepter1.jpg",
    "http://mythicspoiler.com/m19/cards/sigiledswordofvaleron2.jpg",
    "http://mythicspoiler.com/m19/cards/transmogrifyingwand2.jpg",
    "http://mythicspoiler.com/m19/cards/detectiontower1.jpg",
    "http://mythicspoiler.com/m19/cards/isolate.jpg",
    "http://mythicspoiler.com/m19/cards/frayingomnipotence.jpg",
    "http://mythicspoiler.com/m19/cards/dismissivepyromancer.jpg",
    "http://mythicspoiler.com/m19/cards/thornlieutenant1.jpg",
    "http://mythicspoiler.com/m19/cards/lenaselflesschampion.jpg",
    "http://mythicspoiler.com/m19/cards/djinnofwishes.jpg",
    "http://mythicspoiler.com/m19/cards/graveyardmarshal1.jpg",
    "http://mythicspoiler.com/m19/cards/demandingdragon.jpg",
    "http://mythicspoiler.com/m19/cards/runicarmasaur1.jpg",
    "http://mythicspoiler.com/m19/cards/leoninwarleader.jpg",
    "http://mythicspoiler.com/m19/cards/mysticarcheologist1.jpg",
    "http://mythicspoiler.com/m19/cards/lilianascontract1.jpg",
    "http://mythicspoiler.com/m19/cards/spitflame.jpg",
    "http://mythicspoiler.com/m19/cards/goreclawterrorofqalsisma1.jpg",
    "http://mythicspoiler.com/m19/cards/valiantknight.jpg",
    "http://mythicspoiler.com/m19/cards/supremephantom1.jpg",
    "http://mythicspoiler.com/m19/cards/phylacterylich1.jpg",
    "http://mythicspoiler.com/m19/cards/goblintrashmaster.jpg",
    "http://mythicspoiler.com/m19/cards/hungeringhydra.jpg",
    "http://mythicspoiler.com/m19/cards/cleansingnova.jpg",
    "http://mythicspoiler.com/m19/cards/saimasterthopterist1.jpg",
    "http://mythicspoiler.com/m19/cards/openthegraves.jpg",
    "http://mythicspoiler.com/m19/cards/banefire1.jpg",
    "http://mythicspoiler.com/m19/cards/elvishclancaller.jpg",
    "http://mythicspoiler.com/m19/cards/remorsefulcleric.jpg",
    "http://mythicspoiler.com/m19/cards/onewiththemachine.jpg",
    "http://mythicspoiler.com/m19/cards/deathbaron1.jpg",
    "http://mythicspoiler.com/m19/cards/sarkhansunsealing.jpg",
    "http://mythicspoiler.com/m19/cards/gigantosaurus.jpg",
    "http://mythicspoiler.com/m19/cards/ajanislaststand1.jpg",
    "http://mythicspoiler.com/m19/cards/mistcaller1.jpg",
    "http://mythicspoiler.com/m19/cards/demonofcatastrophes1.jpg",
    "http://mythicspoiler.com/m19/cards/alpinemoon1.jpg",
    "http://mythicspoiler.com/m19/cards/pelakkawurm1.jpg",
    "http://mythicspoiler.com/m19/cards/mentorofthemeek.jpg",
    "http://mythicspoiler.com/m19/cards/metamorphicalteration2.jpg",
    "http://mythicspoiler.com/m19/cards/infernalreckoning.jpg",
    "http://mythicspoiler.com/m19/cards/darkdwelleroracle.jpg",
    "http://mythicspoiler.com/m19/cards/prodigiousgrowth1.jpg",
    "http://mythicspoiler.com/m19/cards/suncleanser1.jpg",
    "http://mythicspoiler.com/m19/cards/patientrebuilding.jpg",
    "http://mythicspoiler.com/m19/cards/isareththeawakener1.jpg",
    "http://mythicspoiler.com/m19/cards/lathlissdragonqueen1.jpg",
    "http://mythicspoiler.com/m19/cards/viviensinvocation.jpg",
    "http://mythicspoiler.com/m19/cards/windreadersphinx.jpg",
    "http://mythicspoiler.com/m19/cards/chaoswand.jpg",
    "http://mythicspoiler.com/m19/cards/dragonshoard.jpg",
    "http://mythicspoiler.com/m19/cards/amuletofsafekeeping.jpg",
    "http://mythicspoiler.com/m19/cards/desecratedtomb1.jpg",
    "http://mythicspoiler.com/m19/cards/magistratesscepter1.jpg",
    "http://mythicspoiler.com/m19/cards/sigiledswordofvaleron2.jpg",
    "http://mythicspoiler.com/m19/cards/transmogrifyingwand2.jpg",
    "http://mythicspoiler.com/m19/cards/detectiontower1.jpg"
]
var uncommon = [
    "http://mythicspoiler.com/m19/cards/shieldmare.jpg",
    "http://mythicspoiler.com/m19/cards/surgemare.jpg",
    "http://mythicspoiler.com/m19/cards/plaguemare.jpg",
    "http://mythicspoiler.com/m19/cards/lightningmare.jpg",
    "http://mythicspoiler.com/m19/cards/vinemare1.jpg",
    "http://mythicspoiler.com/m19/cards/aegisoftheheavens1.jpg",
    "http://mythicspoiler.com/m19/cards/stitcherssupplier1.jpg",
    "http://mythicspoiler.com/m19/cards/thud.jpg",
    "http://mythicspoiler.com/m19/cards/blanchwoodarmor1.jpg",
    "http://mythicspoiler.com/m19/cards/aethershieldartificer1.jpg",
    "http://mythicspoiler.com/m19/cards/bonetoash.jpg",
    "http://mythicspoiler.com/m19/cards/fellspecter.jpg",
    "http://mythicspoiler.com/m19/cards/guttersnipe1.jpg",
    "http://mythicspoiler.com/m19/cards/druidofhorns1.jpg",
    "http://mythicspoiler.com/m19/cards/ajanispridemate.jpg",
    "http://mythicspoiler.com/m19/cards/departeddeckhand1.jpg",
    "http://mythicspoiler.com/m19/cards/reassemblingskeleton.jpg",
    "http://mythicspoiler.com/m19/cards/doublecast1.jpg",
    "http://mythicspoiler.com/m19/cards/dryadgreenseeker.jpg",
    "http://mythicspoiler.com/m19/cards/ajaniswelcome.jpg",
    "http://mythicspoiler.com/m19/cards/horizonscholar.jpg",
    "http://mythicspoiler.com/m19/cards/blooddivination.jpg",
    "http://mythicspoiler.com/m19/cards/dragonegg.jpg",
    "http://mythicspoiler.com/m19/cards/ghirapurguide.jpg",
    "http://mythicspoiler.com/m19/cards/heraldoffaith.jpg",
    "http://mythicspoiler.com/m19/cards/mirrorimage.jpg",
    "http://mythicspoiler.com/m19/cards/diregrafghoul.jpg",
    "http://mythicspoiler.com/m19/cards/infernohellion.jpg",
    "http://mythicspoiler.com/m19/cards/giftofparadise.jpg",
    "http://mythicspoiler.com/m19/cards/hieromancerscage.jpg",
    "http://mythicspoiler.com/m19/cards/psychiccorrosion1.jpg",
    "http://mythicspoiler.com/m19/cards/risefromthegrave.jpg",
    "http://mythicspoiler.com/m19/cards/lightningstrike.jpg",
    "http://mythicspoiler.com/m19/cards/recollect.jpg",
    "http://mythicspoiler.com/m19/cards/knightlyvalor1.jpg",
    "http://mythicspoiler.com/m19/cards/skilledanimator.jpg",
    "http://mythicspoiler.com/m19/cards/gravedigger.jpg",
    "http://mythicspoiler.com/m19/cards/siegebreakergiant.jpg",
    "http://mythicspoiler.com/m19/cards/reclamationsage.jpg",
    "http://mythicspoiler.com/m19/cards/leoninvanguard.jpg",
    "http://mythicspoiler.com/m19/cards/exclusionmage.jpg",
    "http://mythicspoiler.com/m19/cards/murder1.jpg",
    "http://mythicspoiler.com/m19/cards/tectonicrift.jpg",
    "http://mythicspoiler.com/m19/cards/colossalmajesty.jpg",
    "http://mythicspoiler.com/m19/cards/makeastand.jpg",
    "http://mythicspoiler.com/m19/cards/sift1.jpg",
    "http://mythicspoiler.com/m19/cards/nightmaresthirst1.jpg",
    "http://mythicspoiler.com/m19/cards/volcanicdragon.jpg",
    "http://mythicspoiler.com/m19/cards/declaredominance.jpg",
    "http://mythicspoiler.com/m19/cards/militiabugler1.jpg",
    "http://mythicspoiler.com/m19/cards/sleep.jpg",
    "http://mythicspoiler.com/m19/cards/ravenousharpy1.jpg",
    "http://mythicspoiler.com/m19/cards/volleyveteran.jpg",
    "http://mythicspoiler.com/m19/cards/vigilantbaloth.jpg",
    "http://mythicspoiler.com/m19/cards/noviceknight1.jpg",
    "http://mythicspoiler.com/m19/cards/switcheroo.jpg",
    "http://mythicspoiler.com/m19/cards/vampiresovereign.jpg",
    "http://mythicspoiler.com/m19/cards/heroicreinforcements1.jpg",
    "http://mythicspoiler.com/m19/cards/enigmadrake1.jpg",
    "http://mythicspoiler.com/m19/cards/regalbloodlord.jpg",
    "http://mythicspoiler.com/m19/cards/skyriderpatrol.jpg",
    "http://mythicspoiler.com/m19/cards/poisontiparcher.jpg",
    "http://mythicspoiler.com/m19/cards/draconicdisciple.jpg",
    "http://mythicspoiler.com/m19/cards/psychicsymbiont.jpg",
    "http://mythicspoiler.com/m19/cards/aerialengineer.jpg",
    "http://mythicspoiler.com/m19/cards/brawlbashogre.jpg",
    "http://mythicspoiler.com/m19/cards/satyrenchanter.jpg",
    "http://mythicspoiler.com/m19/cards/arcaneencyclopedia1.jpg",
    "http://mythicspoiler.com/m19/cards/suspiciousbookcase.jpg",
    "http://mythicspoiler.com/m19/cards/diamondmare.jpg",
    "http://mythicspoiler.com/m19/cards/gargoylesentinel.jpg",
    "http://mythicspoiler.com/m19/cards/meteorgolem.jpg",
    "http://mythicspoiler.com/m19/cards/millstone.jpg",
    "http://mythicspoiler.com/m19/cards/fountainofrenewal.jpg",
    "http://mythicspoiler.com/m19/cards/roguesgloves.jpg",
    "http://mythicspoiler.com/m19/cards/reliquarytower1.jpg",
    "http://mythicspoiler.com/m19/cards/rupturespire1.jpg",
    "http://mythicspoiler.com/m19/cards/aethertunnel.jpg"
]
var common = [
    "http://mythicspoiler.com/m19/cards/havocdevils1.jpg",
    "http://mythicspoiler.com/m19/cards/rootsnare1.jpg",
    "http://mythicspoiler.com/m19/cards/angelofthedawn1.jpg",
    "http://mythicspoiler.com/m19/cards/abnormalendurance.jpg",
    "http://mythicspoiler.com/m19/cards/viashinopyromancer.jpg",
    "http://mythicspoiler.com/m19/cards/druidofthecowl.jpg",
    "http://mythicspoiler.com/m19/cards/invokethedivine1.jpg",
    "http://mythicspoiler.com/m19/cards/aviationpioneer1.jpg",
    "http://mythicspoiler.com/m19/cards/bogstomper.jpg",
    "http://mythicspoiler.com/m19/cards/actoftreason1.jpg",
    "http://mythicspoiler.com/m19/cards/bristlingboar.jpg",
    "http://mythicspoiler.com/m19/cards/cavalrydrillmaster.jpg",
    "http://mythicspoiler.com/m19/cards/anticipate1.jpg",
    "http://mythicspoiler.com/m19/cards/childofnight1.jpg",
    "http://mythicspoiler.com/m19/cards/boggartbrute.jpg",
    "http://mythicspoiler.com/m19/cards/centaurcourser.jpg",
    "http://mythicspoiler.com/m19/cards/daybreakchaplain1.jpg",
    "http://mythicspoiler.com/m19/cards/avenwindmage.jpg",
    "http://mythicspoiler.com/m19/cards/doomeddissenter.jpg",
    "http://mythicspoiler.com/m19/cards/catalystelemental1.jpg",
    "http://mythicspoiler.com/m19/cards/colossaldreadmaw.jpg",
    "http://mythicspoiler.com/m19/cards/dwarvenpriest1.jpg",
    "http://mythicspoiler.com/m19/cards/cancel1.jpg",
    "http://mythicspoiler.com/m19/cards/duress.jpg",
    "http://mythicspoiler.com/m19/cards/crashthrough.jpg",
    "http://mythicspoiler.com/m19/cards/daggerbackbasilisk.jpg",
    "http://mythicspoiler.com/m19/cards/gallantcavalry1.jpg",
    "http://mythicspoiler.com/m19/cards/disperse1.jpg",
    "http://mythicspoiler.com/m19/cards/epicureofblood1.jpg",
    "http://mythicspoiler.com/m19/cards/electrify.jpg",
    "http://mythicspoiler.com/m19/cards/elvishrejuvenator1.jpg",
    "http://mythicspoiler.com/m19/cards/inspiredcharge1.jpg",
    "http://mythicspoiler.com/m19/cards/divination1.jpg",
    "http://mythicspoiler.com/m19/cards/hiredblade.jpg",
    "http://mythicspoiler.com/m19/cards/fieryfinish.jpg",
    "http://mythicspoiler.com/m19/cards/ghastbarktwins.jpg",
    "http://mythicspoiler.com/m19/cards/knightofthetusk1.jpg",
    "http://mythicspoiler.com/m19/cards/dwindle1.jpg",
    "http://mythicspoiler.com/m19/cards/infectioushorror.jpg",
    "http://mythicspoiler.com/m19/cards/fireelemental1.jpg",
    "http://mythicspoiler.com/m19/cards/giantspider.jpg",
    "http://mythicspoiler.com/m19/cards/knightspledge1.jpg",
    "http://mythicspoiler.com/m19/cards/essencescatter.jpg",
    "http://mythicspoiler.com/m19/cards/infernalscarring.jpg",
    "http://mythicspoiler.com/m19/cards/goblininstigator1.jpg",
    "http://mythicspoiler.com/m19/cards/greenwoodsentinel.jpg",
    "http://mythicspoiler.com/m19/cards/loxodonlinebreaker1.jpg",
    "http://mythicspoiler.com/m19/cards/frilledseaserpent1.jpg",
    "http://mythicspoiler.com/m19/cards/lichscaress.jpg",
    "http://mythicspoiler.com/m19/cards/goblinmotivator1.jpg",
    "http://mythicspoiler.com/m19/cards/highlandgame.jpg",
    "http://mythicspoiler.com/m19/cards/luminousbonds.jpg",
    "http://mythicspoiler.com/m19/cards/gearsmithprodigy1.jpg",
    "http://mythicspoiler.com/m19/cards/macabrewaltz.jpg",
    "http://mythicspoiler.com/m19/cards/hostileminotaur1.jpg",
    "http://mythicspoiler.com/m19/cards/naturalize.jpg",
    "http://mythicspoiler.com/m19/cards/mightyleap1.jpg",
    "http://mythicspoiler.com/m19/cards/ghostform1.jpg",
    "http://mythicspoiler.com/m19/cards/mindrot.jpg",
    "http://mythicspoiler.com/m19/cards/lavaaxe1.jpg",
    "http://mythicspoiler.com/m19/cards/oakenform.jpg",
    "http://mythicspoiler.com/m19/cards/oreskosswiftclaw1.jpg",
    "http://mythicspoiler.com/m19/cards/omenspeaker1.jpg",
    "http://mythicspoiler.com/m19/cards/skeletonarcher.jpg",
    "http://mythicspoiler.com/m19/cards/onakkeogre1.jpg",
    "http://mythicspoiler.com/m19/cards/plummet.jpg",
    "http://mythicspoiler.com/m19/cards/pegasuscourser.jpg",
    "http://mythicspoiler.com/m19/cards/salvagerofsecrets1.jpg",
    "http://mythicspoiler.com/m19/cards/skymarchbloodletter.jpg",
    "http://mythicspoiler.com/m19/cards/shock.jpg",
    "http://mythicspoiler.com/m19/cards/rabidbite.jpg",
    "http://mythicspoiler.com/m19/cards/revitalize1.jpg",
    "http://mythicspoiler.com/m19/cards/scholarofstars1.jpg",
    "http://mythicspoiler.com/m19/cards/sovereignsbite1.jpg",
    "http://mythicspoiler.com/m19/cards/smelt1.jpg",
    "http://mythicspoiler.com/m19/cards/rhoxoracle1.jpg",
    "http://mythicspoiler.com/m19/cards/rustwingfalcon1.jpg",
    "http://mythicspoiler.com/m19/cards/snappingdrake.jpg",
    "http://mythicspoiler.com/m19/cards/stranglingspores.jpg",
    "http://mythicspoiler.com/m19/cards/sparktonguedragon.jpg",
    "http://mythicspoiler.com/m19/cards/talonsofwildwood.jpg",
    "http://mythicspoiler.com/m19/cards/starcrownedstag.jpg",
    "http://mythicspoiler.com/m19/cards/tolarianscholar1.jpg",
    "http://mythicspoiler.com/m19/cards/twoheadedzombie1.jpg",
    "http://mythicspoiler.com/m19/cards/surestrike1.jpg",
    "http://mythicspoiler.com/m19/cards/thornhidewolves.jpg",
    "http://mythicspoiler.com/m19/cards/takevengeance.jpg",
    "http://mythicspoiler.com/m19/cards/totallylost.jpg",
    "http://mythicspoiler.com/m19/cards/walkingcorpse.jpg",
    "http://mythicspoiler.com/m19/cards/tormentingvoice1.jpg",
    "http://mythicspoiler.com/m19/cards/titanicgrowth.jpg",
    "http://mythicspoiler.com/m19/cards/trustypackbeast1.jpg",
    "http://mythicspoiler.com/m19/cards/uncomfortablechill1.jpg",
    "http://mythicspoiler.com/m19/cards/vampireneonate.jpg",
    "http://mythicspoiler.com/m19/cards/trumpetblast1.jpg",
    "http://mythicspoiler.com/m19/cards/wallofvines.jpg",
    "http://mythicspoiler.com/m19/cards/wallofmist1.jpg",
    "http://mythicspoiler.com/m19/cards/explosiveapparatus.jpg",
    "http://mythicspoiler.com/m19/cards/gearsmithguardian.jpg",
    "http://mythicspoiler.com/m19/cards/fieldcreeper.jpg",
    "http://mythicspoiler.com/m19/cards/manalith1.jpg",
    "http://mythicspoiler.com/m19/cards/maraudersaxe2.jpg",
    "http://mythicspoiler.com/m19/cards/skyscanner1.jpg",
    "http://mythicspoiler.com/m19/cards/cinderbarrens1.jpg",
    "http://mythicspoiler.com/m19/cards/forsakensanctuary1.jpg",
    "http://mythicspoiler.com/m19/cards/foulorchard1.jpg",
    "http://mythicspoiler.com/m19/cards/highlandlake1.jpg",
    "http://mythicspoiler.com/m19/cards/meanderingriver1.jpg",
    "http://mythicspoiler.com/m19/cards/stonequarry1.jpg",
    "http://mythicspoiler.com/m19/cards/submergedboneyard1.jpg",
    "http://mythicspoiler.com/m19/cards/timbergorge1.jpg",
    "http://mythicspoiler.com/m19/cards/tranquilexpanse1.jpg",
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg"
]
var pRare = [
    "http://www.pokebeach.com/news/0618/035167_P_BIRIJIONGX-72x100.jpg.pagespeed.ce._tyWruQ_oH.jpg",
    "http://www.pokebeach.com/news/0618/035173_P_MAGUKARUGOGX-72x100.jpg.pagespeed.ce.Y4a137MPeM.jpg",
    "http://www.pokebeach.com/news/0618/035194_P_ZERAORAGX-72x100.jpg.pagespeed.ce.L9nLHyGM5C.jpg",
    "http://www.pokebeach.com/news/0618/035202_P_GENOSEKUTOGX-72x100.jpg.pagespeed.ce.WUaUbuT8tW.jpg",
    "http://www.pokebeach.com/news/0618/035204_P_METAMON-72x100.jpg.pagespeed.ce.oc7THDDXhG.jpg",
    "http://www.pokebeach.com/news/0618/035219_T_SANDAMAUNTEN-72x100.jpg.pagespeed.ce.Ba2E85theu.jpg",

    "http://www.pokebeach.com/news/0618/035170_P_KAPUBURURU-72x100.jpg.pagespeed.ce.WfOOfNoLu6.jpg",
    "http://www.pokebeach.com/news/0618/035174_P_HIDORAN-72x100.jpg.pagespeed.ce.C7U9o3r7Sk.jpg",
    "http://www.pokebeach.com/news/0618/035179_P_SUIKUN-72x100.jpg.pagespeed.ce.JdiHduzWQq.jpg",
    "http://www.pokebeach.com/news/0618/035182_P_HOWAITOKYUREMU-72x100.jpg.pagespeed.ce.jdOSjPZj5E.jpg",
    "http://www.pokebeach.com/news/0618/035193_P_KAPUKOKEKO-72x100.jpg.pagespeed.ce.glyQVbkm1M.jpg",
    "http://www.pokebeach.com/news/0618/035199_P_DEIARUGA-72x100.jpg.pagespeed.ce.H6hY46CFSp.jpg",
    "http://www.pokebeach.com/news/0618/035201_P_KOBARUON-72x100.jpg.pagespeed.ce.hsh2a4BtJz.jpg"
]
var pUncommon = [
    "http://www.pokebeach.com/news/0618/035163_P_TSUBOTSUBO-72x100.jpg.pagespeed.ce.TbF71fyF_a.jpg",
    "http://www.pokebeach.com/news/0618/035166_P_DOKUKEIRU-72x100.jpg.pagespeed.ce.DxGD1NKkAM.jpg",
    "http://www.pokebeach.com/news/0618/035171_P_FAIYA-72x100.jpg.pagespeed.ce._7-gpg0yCF.jpg",
    "http://www.pokebeach.com/news/0618/035175_P_BIKUTEINI-72x100.jpg.pagespeed.ce.ceKCHB_0WO.jpg",
    "http://www.pokebeach.com/news/0618/035178_P_RAPURASU-72x100.jpg.pagespeed.ce.W-qx6bwCEY.jpg",
    "http://www.pokebeach.com/news/0618/035181_P_TSUNBEA-72x100.jpg.pagespeed.ce.s72gTpukk4.jpg",
    "http://www.pokebeach.com/news/0618/035185_P_ASHIRENU-72x100.jpg.pagespeed.ce.DuqvenKJZh.jpg",
    "http://www.pokebeach.com/news/0618/035188_P_EREKIBURU-72x100.jpg.pagespeed.ce.AoXme_y_2s.jpg",
    "http://www.pokebeach.com/news/0618/035191_P_ZEBURAIKA-72x100.jpg.pagespeed.ce.wQ9XmilXNb.jpg",
    "http://www.pokebeach.com/news/0618/035198_P_HAGANERU-72x100.jpg.pagespeed.ce.Qg7spq3d_O.jpg",
    "http://www.pokebeach.com/news/0618/035206_T_ENERUGITSUKEKAE-72x100.jpg.pagespeed.ce.XYVdBBfpb1.jpg",
    "http://www.pokebeach.com/news/0618/035207_T_EREKIPAWA-72x100.jpg.pagespeed.ce.x4SJOt1ujH.jpg",
    "http://www.pokebeach.com/news/0618/035209_T_SUPAPOKEMONKAISHUU-72x100.jpg.pagespeed.ce.mkwUr9je_T.jpg",
    "http://www.pokebeach.com/news/0618/035210_T_HAIPABORU-72x100.jpg.pagespeed.ce.skkFH0q32V.jpg",
    "http://www.pokebeach.com/news/0618/035211_T_POKEMONIREKAE-72x100.jpg.pagespeed.ce.2yEfZBfoln.jpg",
    "http://www.pokebeach.com/news/0618/035212_T_POKEMONKYACCHA-72x100.jpg.pagespeed.ce.Du1YWeofzl.jpg",
    "http://www.pokebeach.com/news/0618/035214_T_KAUNTAGEIN-72x100.jpg.pagespeed.ce.Uz6cmiqwHS.jpg",
    "http://www.pokebeach.com/news/0618/035215_T_KODAWARIHACHIMAKI-72x100.jpg.pagespeed.ce.PqD0ecKaz9.jpg",
    "http://www.pokebeach.com/news/0618/035218_T_JAJJIMAN-72x100.jpg.pagespeed.ce.ucp4leoBJg.jpg",
    "http://www.pokebeach.com/news/0618/035220_E_DABURUMUSHOKUENERUGI-72x100.jpg.pagespeed.ce.weNcp7Sjzp.jpg",
    "http://www.pokebeach.com/news/0618/035221_E_YUNITTOENERUGIKUSAHONOOMIZU-72x100.jpg.pagespeed.ce.9B6PpdmVVe.jpg"
]
var pCommon = [
    "http://www.pokebeach.com/news/0618/035162_P_KAIROSU-72x100.jpg.pagespeed.ce.y7OxpfiqRU.jpg",
    "http://www.pokebeach.com/news/0618/035164_P_KEMUSSO-72x100.jpg.pagespeed.ce.olceDtNxOB.jpg",
    "http://www.pokebeach.com/news/0618/035165_P_MAYURUDO-72x100.jpg.pagespeed.ce._Y_80_QJMM.jpg",
    "http://www.pokebeach.com/news/0618/035168_P_MEEKURU-72x100.jpg.pagespeed.ce.-xYRxcs2Ev.jpg",
    "http://www.pokebeach.com/news/0618/035169_P_GOGOTO-72x100.jpg.pagespeed.ce.zjbFyJjj3-.jpg",
    "http://www.pokebeach.com/news/0618/035172_P_MAGUMAGGU-72x100.jpg.pagespeed.ce.M9mqYrQz4g.jpg",
    "http://www.pokebeach.com/news/0618/035176_P_SHISHIKO-72x100.jpg.pagespeed.ce.xI6JK2IhO7.jpg",
    "http://www.pokebeach.com/news/0618/035177_P_KAENJISHI-72x100.jpg.pagespeed.ce.CFseNnZPC0.jpg",
    "http://www.pokebeach.com/news/0618/035180_P_KUMASHUN-72x100.jpg.pagespeed.ce.PW6-ZqzW5G.jpg",
    "http://www.pokebeach.com/news/0618/035183_P_ASHIMARI-72x100.jpg.pagespeed.ce.Uhr8vyL7Dj.jpg",
    "http://www.pokebeach.com/news/0618/035184_P_OSHAMARI-72x100.jpg.pagespeed.ce.Oxs5GzfdW5.jpg",
    "http://www.pokebeach.com/news/0618/035186_P_HAGIGISHIRI-72x100.jpg.pagespeed.ce.GAzv1cMcma.jpg",
    "http://www.pokebeach.com/news/0618/035187_P_EREBU-72x100.jpg.pagespeed.ce.OrHzIHSi-B.jpg",
    "http://www.pokebeach.com/news/0618/035189_P_PACHIRISU-72x100.jpg.pagespeed.ce.e6yDAiIR7L.jpg",
    "http://www.pokebeach.com/news/0618/035190_P_SHIMAMA-72x100.jpg.pagespeed.ce.h1q_J7LxKp.jpg",
    "http://www.pokebeach.com/news/0618/035192_P_MAGGYO-72x100.jpg.pagespeed.ce.Du6DaX9W1E.jpg",
    "http://www.pokebeach.com/news/0618/035195_P_IWAKU-72x100.jpg.pagespeed.ce.jlsXTxF0UD.jpg",
    "http://www.pokebeach.com/news/0618/035196_P_ARORADEIGUDA-72x100.jpg.pagespeed.ce.Ub5lhPkTgc.jpg",
    "http://www.pokebeach.com/news/0618/035197_P_ARORADAGUTORIO-72x100.jpg.pagespeed.ce.IpdJIZbabZ.jpg",
    "http://www.pokebeach.com/news/0618/035200_P_AIANTO-72x100.jpg.pagespeed.ce.-TJ_4ylBW5.jpg",
    "http://www.pokebeach.com/news/0618/035203_P_MAGIANA-72x100.jpg.pagespeed.ce._YxRP0AFvD.jpg",
    "http://www.pokebeach.com/news/0618/035205_P_KAKUREON-72x100.jpg.pagespeed.ce.mMrqa4dLpN.jpg",
    "http://www.pokebeach.com/news/0618/035208_T_KASUTAMUKYACCHA-72x100.jpg.pagespeed.ce.If3GqS0Es2.jpg",
    "http://www.pokebeach.com/news/0618/035213_T_MIKKUSUHABU-72x100.jpg.pagespeed.ce.ffm2_QvkoJ.jpg",
    "http://www.pokebeach.com/news/0618/035216_T_KAHIRI-72x100.jpg.pagespeed.ce.g5WfSSrjgd.jpg",
    "http://www.pokebeach.com/news/0618/035217_T_KANKOUKYAKU-72x100.jpg.pagespeed.ce.Wi3Ies-DUw.jpg"
]
var test = [
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg",
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg",
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg",
    "http://mythicspoiler.com/m19/cards/totallylost.jpg",
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg",
    "http://mythicspoiler.com/m19/cards/totallylost.jpg",
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg",
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg",
    "http://mythicspoiler.com/m19/cards/totallylost.jpg",
    "http://mythicspoiler.com/m19/cards/woodlandstream1.jpg",
    "http://mythicspoiler.com/m19/cards/totallylost.jpg"
]
var arrayTest = [
  {
    name:"Tezzeret, Artifice Master",
    cost:["blue", "blue", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"rare",
    rating: 4.5,
    source:"http://mythicspoiler.com/m19/cards/tezzeretartificemaster1.jpg"
  },
  {
    name:"Ajani, Adversary of Tyrants",
    cost:["white", "white", "colorless", "colorless"],
    color:"white",
    rarity: "rare",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/ajaniadversaryoftyrants1.jpg"
  },
  {
    name:"Liliana, Untouched by Death",
    cost:["black", "black", "colorless", "colorless"],
    color:"black",
    rarity:"rare",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/lilianauntouchedbydeath1.jpg"
  },
  {
    name:"Sarkhan, Fireblood",
    cost:["red", "red", "colorless"],
    color:"red",
    rarity:"rare",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/sarkhanfireblood.jpg"
  },
  {
    name:"Vivien Reid",
    cost:["green", "green","colorless", "colorless", "colorless"],
    color:"green",
    rarity:"rare",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/vivienreid.jpg"
  },
  {
    name:"Resplendent Angel",
    cost:["white", "white","colorless"],
    color:"white",
    rarity:"rare",
    rating: 5,
    source:"http://mythicspoiler.com/m19/cards/resplendentangel1.jpg"
  },
  {
    name:"Shield Mare",
    cost:["white", "white", "colorless"],
    color:"white",
    rarity:"uncommon",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/shieldmare.jpg"
  },
  {
    name:"Surge Mare",
    cost:["blue", "blue"],
    color:"blue",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/surgemare.jpg"
  },
  {
    name:"Plague Mare",
    cost:["black", "black", "colorless"],
    color:"black",
    rarity:"uncommon",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/plaguemare.jpg"
  },
  {
    name:"Lightning Mare",
    cost:["red", "red"],
    color:"red",
    rarity:"uncommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/lightningmare.jpg"
  },
  {
    name:"Vine Mare",
    cost:["green", "green", "colorless", "colorless"],
    color:"green",
    rarity:"uncommon",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/vinemare1.jpg"
  },
  {
    name:"Aviation Pioneer",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/aviationpioneer1.jpg"
  },
  {
    name:"Bogstomper",
    cost:["black", "black", "colorless", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/bogstomper.jpg"
  },
  {
    name:"Act of Treason",
    cost:["red", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/actoftreason1.jpg"
  },
  {
    name:"Bristling Boar",
    cost:["green", "colorless","colorless", "colorless"],
    color:"green",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/bristlingboar.jpg"
  },
  {
    name:"Aegis of Heavens",
    cost:["white", "colorless"],
    color:"white",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/aegisoftheheavens1.jpg"
  },
  {
    name:"Aethershield Artificer",
    cost:["white", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"uncommon",
    rating: 2.0,
    source:"http://mythicspoiler.com/m19/cards/aethershieldartificer1.jpg"
  },
  {
    name:"Ajani’s Last Stand",
    cost:["white", "white", "colorless", "colorless"],
    color:"white",
    rarity:"rare",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/ajanislaststand1.jpg"
  },
  {
    name:"Ajani’s Pridemate",
    cost:["white", "colorless"],
    color:"white",
    rarity:"uncommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/ajanispridemate.jpg"
  },
  {
    name:"Ajani’s Welcome",
    cost:["white"],
    color:"white",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/ajaniswelcome.jpg"
  },
  {
    name:"Angel of the Dawn",
    cost:["white", "colorless", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/angelofthedawn1.jpg"
  },
  {
    name:"Cavalry Drillmaster",
    cost:["white", "colorless"],
    color:"white",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/cavalrydrillmaster.jpg"
  },
  {
    name:"Cleansing Nova",
    cost:["white", "white", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"rare",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/cleansingnova.jpg"
  },
  {
    name:"Daybreak Chaplain",
    cost:["white", "colorless"],
    color:"white",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/daybreakchaplain1.jpg"
  },
  {
    name:"Dwarven Priest",
    cost:["white", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/dwarvenpriest1.jpg"
  },
  {
    name:"Gallant Cavalry",
    cost:["white", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/gallantcavalry1.jpg"
  },
  {
    name:"Herald of Faith",
    cost:["white", "white", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/heraldoffaith.jpg"
  },
  {
    name:"Hieromancer’s Cage",
    cost:["white", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/hieromancerscage.jpg"
  },
  {
    name:"Inspired Charge",
    cost:["white", "white", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/inspiredcharge1.jpg"
  },
  {
    name:"Invoke the Divine",
    cost:["white", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/invokethedivine1.jpg"
  },
  {
    name:"Isolate",
    cost:["white"],
    color:"white",
    rarity:"rare",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/isolate.jpg"
  },
  {
    name:"Knight of the Tusk",
    cost:["white", "white", "colorless", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"commnon",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/knightofthetusk1.jpg"
  },
  {
    name:"Knight’s Pledge",
    cost:["white", "colorless"],
    color:"white",
    rarity:"commnon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/knightspledge1.jpg"
  },
  {
    name:"Knightly Valor",
    cost:["white", "colorless", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"uncommnon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/knightlyvalor1.jpg"
  },
  {
    name:"Lena, Selfless Champion",
    cost:["white", "white", "colorless", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"rare",
    rating: 4.5,
    source:"http://mythicspoiler.com/m19/cards/lenaselflesschampion.jpg"
  },
  {
    name:"Leonin Vanguard",
    cost:["white"],
    color:"white",
    rarity:"uncommon",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/leoninvanguard.jpg"
  },
  {
    name:"Leonin Warleader",
    cost:["white", "white", "colorless", "colorless"],
    color:"white",
    rarity:"rare",
    rating: 4.5,
    source:"http://mythicspoiler.com/m19/cards/leoninwarleader.jpg"
  },
  {
    name:"Loxodon Line Breaker",
    cost:["white", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/loxodonlinebreaker1.jpg"
  },
  {
    name:"Luminous Bonds",
    cost:["white", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/luminousbonds.jpg"
  },
  {
    name:"Make a Stand",
    cost:["white", "colorless", "colorless"],
    color:"white",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/makeastand.jpg"
  },
  {
    name:"Mentor of the Meek",
    cost:["white", "colorless", "colorless"],
    color:"white",
    rarity:"rare",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/mentorofthemeek.jpg"
  },
  {
    name:"Mighty Leap",
    cost:["white", "colorless"],
    color:"white",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/mightyleap1.jpg"
  },
  {
    name:"Militia Bugler",
    cost:["white", "colorless", "colorless"],
    color:"white",
    rarity:"uncommon",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/militiabugler1.jpg"
  },
  {
    name:"Novice Knight",
    cost:["white"],
    color:"white",
    rarity:"uncommon",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/noviceknight1.jpg"
  },
  {
    name:"Oreskos Swiftclaw",
    cost:["white", "colorless"],
    color:"white",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/oreskosswiftclaw1.jpg"
  },
  {
    name:"Pegasus Courser",
    cost:["white", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/pegasuscourser.jpg"
  },
  {
    name:"Remorseful Cleric",
    cost:["white", "colorless"],
    color:"white",
    rarity:"rare",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/remorsefulcleric.jpg"
  },
  {
    name:"Revitalize",
    cost:["white", "colorless"],
    color:"white",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/revitalize1.jpg"
  },
  {
    name:"Rustwing Falcon",
    cost:["white"],
    color:"white",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/rustwingfalcon1.jpg"
  },
  {
    name:"Star-Crowned Stag",
    cost:["white", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/starcrownedstag.jpg"
  },
  {
    name:"Suncleanser",
    cost:["white", "colorless"],
    color:"white",
    rarity:"rare",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/suncleanser1.jpg"
  },
  {
    name:"Take Vengeance",
    cost:["white", "colorless"],
    color:"white",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/takevengeance.jpg"
  },
  {
    name:"Trusty Packbeast",
    cost:["white", "colorless", "colorless"],
    color:"white",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/trustypackbeast1.jpg"
  },
  {
    name:"Valiant Knight",
    cost:["white", "colorless", "colorless", "colorless"],
    color:"white",
    rarity:"rare",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/valiantknight.jpg"
  },
  {
    name:"Aether Tunnel",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/aethertunnel.jpg"
  },
  {
    name:"Anticipate",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/anticipate1.jpg"
  },
  {
    name:"Aven Wind Mage",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/avenwindmage.jpg"
  },
  {
    name:"Bone to Ash",
    cost:["blue", "blue", "colorless", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/bonetoash.jpg"
  },
  {
    name:"Cancel",
    cost:["blue", "blue", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/cancel1.jpg"
  },
  {
    name:"Departed Deckhand",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/departeddeckhand1.jpg"
  },
  {
    name:"Disperse",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/disperse1.jpg"
  },
  {
    name:"Divination",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/divination1.jpg"
  },
  {
    name:"Djinn of Wishes",
    cost:["blue", "blue", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"rare",
    rating: 4.5,
    source:"http://mythicspoiler.com/m19/cards/djinnofwishes.jpg"
  },
  {
    name:"Dwindle",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/dwindle1.jpg"
  },
  {
    name:"Essence Scatter",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/essencescatter.jpg"
  },
  {
    name:"Exclusion Mage",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/exclusionmage.jpg"
  },
  {
    name:"Frilled Sea Serpent",
    cost:["blue","blue", "colorless", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/frilledseaserpent1.jpg"
  },
  {
    name:"Gearsmith Prodigy",
    cost:["blue"],
    color:"blue",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/gearsmithprodigy1.jpg"
  },
  {
    name:"Ghostform",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/ghostform1.jpg"
  },
  {
    name:"Horizon Scholar",
    cost:["blue", "colorless", "colorless", "colorless", "colorless","colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/horizonscholar.jpg"
  },
  {
    name:"Metamorphic Alteration",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"rare",
    rating: 0.5,
    source:"http://mythicspoiler.com/m19/cards/metamorphicalteration2.jpg"
  },
  {
    name:"Mirror Image",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/mirrorimage.jpg"
  },
  {
    name:"Mistcaller",
    cost:["blue"],
    color:"blue",
    rarity:"rare",
    rating: 0.5,
    source:"http://mythicspoiler.com/m19/cards/mistcaller1.jpg"
  },
  {
    name:"Mystic Archaeologist",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"rare",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/mysticarcheologist1.jpg"
  },
  {
    name:"Omenspeaker",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/omenspeaker1.jpg"
  },
  {
    name:"One with the Machine",
    cost:["blue", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"rare",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/onewiththemachine.jpg"
  },
  {
    name:"Patient Rebuilding",
    cost:["blue", "blue", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"rare",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/patientrebuilding.jpg"
  },
  {
    name:"Psychic Corrosion",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/psychiccorrosion1.jpg"
  },
  {
    name:"Sai, Master Thopterist",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"rare",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/saimasterthopterist1.jpg"
  },
  {
    name:"Salvager of Secrets",
    cost:["blue", "blue", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/salvagerofsecrets1.jpg"
  },
  {
    name:"Scholar of Stars",
    cost:["blue", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/scholarofstars1.jpg"
  },
  {
    name:"Sift",
    cost:["blue", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/sift1.jpg"
  },
  {
    name:"Skilled Animator",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/skilledanimator.jpg"
  },
  {
    name:"Sleep",
    cost:["blue", "blue", "colorless", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/sleep.jpg"
  },
  {
    name:"Snapping Drake",
    cost:["blue", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/snappingdrake.jpg"
  },
  {
    name:"Supreme Phantom",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"rare",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/supremephantom1.jpg"
  },
  {
    name:"Switcheroo",
    cost:["blue", "colorless", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"uncommon",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/switcheroo.jpg"
  },
  {
    name:"Tolarian Scholar",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/tolarianscholar1.jpg"
  },
  {
    name:"Totally Lost",
    cost:["blue", "colorless", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/totallylost.jpg"
  },
  {
    name:"Uncomfortable Chill",
    cost:["blue", "colorless", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/uncomfortablechill1.jpg"
  },
  {
    name:"Wall of Mist",
    cost:["blue", "colorless"],
    color:"blue",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/wallofmist1.jpg"
  },
  {
    name:"Windreader Sphinx",
    cost:["blue", "blue", "colorless", "colorless", "colorless", "colorless", "colorless"],
    color:"blue",
    rarity:"rare",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/windreadersphinx.jpg"
  },
  {
    name:"Abnormal Endurance",
    cost:["black", "colorless"],
    color:"black",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/abnormalendurance.jpg"
  },
  {
    name:"Blood Divination",
    cost:["black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/blooddivination.jpg"
  },
  {
    name:"Bone Dragon",
    cost:["black", "black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"rare",
    rating: 4.5,
    source:"http://mythicspoiler.com/m19/cards/bonedragon.jpg"
  },
  {
    name:"Child of Night",
    cost:["black", "colorless"],
    color:"black",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/childofnight1.jpg"
  },
  {
    name:"Death Baron",
    cost:["black", "black", "colorless"],
    color:"black",
    rarity:"rare",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/deathbaron1.jpg"
  },
  {
    name:"Demon of Catastrophes",
    cost:["black", "black", "colorless", "colorless"],
    color:"black",
    rarity:"rare",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/demonofcatastrophes1.jpg"
  },
  {
    name:"Diregraf Ghoul",
    cost:["black"],
    color:"black",
    rarity:"uncommon",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/diregrafghoul.jpg"
  },
  {
    name:"Doomed Dissenter",
    cost:["black", "colorless"],
    color:"black",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/doomeddissenter.jpg"
  },
  {
    name:"Duress",
    cost:["black"],
    color:"black",
    rarity:"common",
    rating: 0.5,
    source:"http://mythicspoiler.com/m19/cards/duress.jpg"
  },
  {
    name:"Epicure of Blood",
    cost:["black", "colorless", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/epicureofblood1.jpg"
  },
  {
    name:"Fell Specter",
    cost:["black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"uncommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/fellspecter.jpg"
  },
  {
    name:"Fraying Omnipotence",
    cost:["black", "black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"rare",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/frayingomnipotence.jpg"
  },
  {
    name:"Gravedigger",
    cost:["black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/gravedigger.jpg"
  },
  {
    name:"Graveyard Marshal",
    cost:["black", "black"],
    color:"black",
    rarity:"rare",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/graveyardmarshal1.jpg"
  },
  {
    name:"Hired Blade",
    cost:["black", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/hiredblade.jpg"
  },
  {
    name:"Infectious Horror",
    cost:["black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/infectioushorror.jpg"
  },
  {
    name:"Infernal Reckoning",
    cost:["black"],
    color:"black",
    rarity:"rare",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/infernalreckoning.jpg"
  },
  {
    name:"Infernal Scarring",
    cost:["black", "colorless"],
    color:"black",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/infernalscarring.jpg"
  },
  {
    name:"Isareth the Awakener",
    cost:["black", "black", "colorless"],
    color:"black",
    rarity:"rare",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/isareththeawakener1.jpg"
  },
  {
    name:"Lich’s Caress",
    cost:["black", "black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/lichscaress.jpg"
  },
  {
    name:"Liliana’s Contract",
    cost:["black", "black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"rare",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/lilianascontract1.jpg"
  },
  {
    name:"Macabre Waltz",
    cost:["black", "colorless"],
    color:"black",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/macabrewaltz.jpg"
  },
  {
    name:"Mind Rot",
    cost:["black", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/mindrot.jpg"
  },
  {
    name:"Murder",
    cost:["black", "black", "colorless"],
    color:"black",
    rarity:"uncommon",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/murder1.jpg"
  },
  {
    name:"Nightmare’s Thirst",
    cost:["black"],
    color:"black",
    rarity:"uncommon",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/nightmaresthirst1.jpg"
  },
  {
    name:"Open the Graves",
    cost:["black", "black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"rare",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/openthegraves.jpg"
  },
  {
    name:"Phylactery Lich",
    cost:["black", "black", "black"],
    color:"black",
    rarity:"rare",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/phylacterylich1.jpg"
  },
  {
    name:"Ravenous Harpy",
    cost:["black", "colorless", "colorless"],
    color:"black",
    rarity:"uncommon",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/ravenousharpy1.jpg"
  },
  {
    name:"Reassembling Skeleton",
    cost:["black", "colorless"],
    color:"black",
    rarity:"uncommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/reassemblingskeleton.jpg"
  },
  {
    name:"Rise from the Grave",
    cost:["black", "colorless", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"uncommon",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/risefromthegrave.jpg"
  },
  {
    name:"Skeleton Archer",
    cost:["black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/skeletonarcher.jpg"
  },
  {
    name:"Skymarch Bloodletter",
    cost:["black", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/skymarchbloodletter.jpg"
  },
  {
    name:"Sovereign’s Bite",
    cost:["black", "colorless"],
    color:"black",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/sovereignsbite1.jpg"
  },
  {
    name:"Stitcher’s Supplier",
    cost:["black"],
    color:"black",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/stitcherssupplier1.jpg"
  },
  {
    name:"Strangling Spores",
    cost:["black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/stranglingspores.jpg"
  },
  {
    name:"Two-Headed Zombie",
    cost:["black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/twoheadedzombie1.jpg"
  },
  {
    name:"Vampire Neonate",
    cost:["black"],
    color:"black",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/vampireneonate.jpg"
  },
  {
    name:"Vampire Sovereign",
    cost:["black", "black", "colorless", "colorless", "colorless"],
    color:"black",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/vampiresovereign.jpg"
  },
  {
    name:"Walking Corpse",
    cost:["black", "colorless"],
    color:"black",
    rarity:"common",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/walkingcorpse.jpg"
  },
  {
    name:"Act of Treason",
    cost:["red", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/actoftreason1.jpg"
  },
  {
    name:"Alpine Moon",
    cost:["red"],
    color:"red",
    rarity:"rare",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/alpinemoon1.jpg"
  },
  {
    name:"Apex of Power",
    cost:["red", "red","red", "colorless", "colorless", "colorless", "colorless", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"rare",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/apexofpower1.jpg"
  },
  {
    name:"Banefire",
    cost:["red"],
    color:"red",
    rarity:"rare",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/banefire1.jpg"
  },
  {
    name:"Boggart Brute",
    cost:["red", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/boggartbrute.jpg"
  },
  {
    name:"Catalyst Elemental",
    cost:["red", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/catalystelemental1.jpg"
  },
  {
    name:"Crash Through",
    cost:["red"],
    color:"red",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/crashthrough.jpg"
  },
  {
    name:"Dark-Dweller Oracle",
    cost:["red", "colorless"],
    color:"red",
    rarity:"rare",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/darkdwelleroracle.jpg"
  },
  {
    name:"Demanding Dragon",
    cost:["red", "red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"rare",
    rating: 4.5,
    source:"http://mythicspoiler.com/m19/cards/demandingdragon.jpg"
  },
  {
    name:"Dismissive Pyromancer",
    cost:["red", "colorless"],
    color:"red",
    rarity:"rare",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/dismissivepyromancer.jpg"
  },
  {
    name:"Doublecast",
    cost:["red", "red"],
    color:"red",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/doublecast1.jpg"
  },
  {
    name:"Dragon Egg",
    cost:["red", "colorless", "colorless"],
    color:"red",
    rarity:"uncommon",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/dragonegg.jpg"
  },
  {
    name:"Electrify",
    cost:["red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/electrify.jpg"
  },
  {
    name:"Fiery Finish",
    cost:["red", "red", "colorless", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"uncommon",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/fieryfinish.jpg"
  },
  {
    name:"Fire Elemental",
    cost:["red", "red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/fireelemental1.jpg"
  },
  {
    name:"Goblin Instigator",
    cost:["red", "colorless"],
    color:"red",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/goblininstigator1.jpg"
  },
  {
    name:"Goblin Motivator",
    cost:["red"],
    color:"red",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/goblinmotivator1.jpg"
  },
  {
    name:"Goblin Trashmaster",
    cost:["red", "red", "colorless", "colorless"],
    color:"red",
    rarity:"rare",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/goblintrashmaster.jpg"
  },
  {
    name:"Guttersnipe",
    cost:["red", "colorless", "colorless"],
    color:"red",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/guttersnipe1.jpg"
  },
  {
    name:"Havoc Devils",
    cost:["red", "red", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/havocdevils1.jpg"
  },
  {
    name:"Hostile Minotaur",
    cost:["red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 2.5,
    source:"http://mythicspoiler.com/m19/cards/hostileminotaur1.jpg"
  },
  {
    name:"Inferno Hellion",
    cost:["red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"uncommon",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/infernohellion.jpg"
  },
  {
    name:"Lathliss, Dragon Queen",
    cost:["red", "red", "colorless", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"rare",
    rating: 4,
    source:"http://mythicspoiler.com/m19/cards/lathlissdragonqueen1.jpg"
  },
  {
    name:"Lava Axe",
    cost:["red", "colorless", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/lavaaxe1.jpg"
  },
  {
    name:"Lightning Strike",
    cost:["red", "colorless"],
    color:"red",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/lightningstrike.jpg"
  },
  {
    name:"Onnake Ogre",
    cost:["red", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/onakkeogre1.jpg"
  },
  {
    name:"Sarkhan’s Unsealing",
    cost:["red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"rare",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/sarkhansunsealing.jpg"
  },
  {
    name:"Shock",
    cost:["red"],
    color:"red",
    rarity:"common",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/shock.jpg"
  },
  {
    name:"Siegebreaker Giant",
    cost:["red", "red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"uncommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/siegebreakergiant.jpg"
  },
  {
    name:"Smelt",
    cost:["red"],
    color:"red",
    rarity:"common",
    rating: 0.5,
    source:"http://mythicspoiler.com/m19/cards/smelt1.jpg"
  },
  {
    name:"Sparktongue Dragon",
    cost:["red", "red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/sparktonguedragon.jpg"
  },
  {
    name:"Spit Flame",
    cost:["red", "colorless", "colorless"],
    color:"red",
    rarity:"rare",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/spitflame.jpg"
  },
  {
    name:"Sure Strike",
    cost:["red", "colorless"],
    color:"red",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/surestrike1.jpg"
  },
  {
    name:"Tectonic Rift",
    cost:["red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"uncommon",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/tectonicrift.jpg"
  },
  {
    name:"Thud",
    cost:["red"],
    color:"red",
    rarity:"uncommon",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/thud.jpg"
  },
  {
    name:"Tormenting Voice",
    cost:["red","colorless"],
    color:"red",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/tormentingvoice1.jpg"
  },
  {
    name:"Trumpet Blast",
    cost:["red","colorless", "colorless"],
    color:"red",
    rarity:"common",
    rating: 1,
    source:"http://mythicspoiler.com/m19/cards/trumpetblast1.jpg"
  },
  {
    name:"Viashino Pyromancer",
    cost:["red", "colorless"],
    color:"red",
    rarity:"common",
    rating: 1.5,
    source:"http://mythicspoiler.com/m19/cards/viashinopyromancer.jpg"
  },
  {
    name:"Volcanic Dragon",
    cost:["red","red", "colorless", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"uncommon",
    rating: 3.5,
    source:"http://mythicspoiler.com/m19/cards/volcanicdragon.jpg"
  },
  {
    name:"Volley Veteran",
    cost:["red", "colorless", "colorless", "colorless"],
    color:"red",
    rarity:"uncommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/volleyveteran.jpg"
  },
  {
    name:"Detection Tower",
    cost:["Null"],
    color:"colorless",
    rarity:"rare",
    rating: 0.5,
    source:"http://mythicspoiler.com/m19/cards/detectiontower1.jpg"
  },
  {
    name:"Reliquary Tower",
    cost:["Null"],
    color:"colorless",
    rarity:"uncommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/reliquarytower1.jpg"
  },
  {
    name:"Rupture Spire",
    cost:["Null"],
    color:"colorless",
    rarity:"uncommon",
    rating: 2,
    source:"http://mythicspoiler.com/m19/cards/rupturespire1.jpg"
  },
  {
    name:"Cinder Barrens",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/cinderbarrens1.jpg"
  },
  {
    name:"Forsaken Sanctuary",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/forsakensanctuary1.jpg"
  },
  {
    name:"Foul Orchard",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/foulorchard1.jpg"
  },
  {
    name:"Highland Lake",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/highlandlake1.jpg"
  },
  {
    name:"Meandering River",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/meanderingriver1.jpg"
  },
  {
    name:"Stone Quarry",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/stonequarry1.jpg"
  },
  {
    name:"Submerged Boneyard",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/submergedboneyard1.jpg"
  },
  {
    name:"Timber Gorge",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/timbergorge1.jpg"
  },
  {
    name:"Tranquil Expanse",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/tranquilexpanse1.jpg"
  },
  {
    name:"Woodland Stream",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 3,
    source:"http://mythicspoiler.com/m19/cards/woodlandstream1.jpg"
  },
  {
    name:"Plains",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/plains1.jpg"
  },
  {
    name:"Plains",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/plains2.jpg"
  },
  {
    name:"Plains",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/plains3.jpg"
  },
  {
    name:"Plains",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/plains4.jpg"
  },
  {
    name:"Island",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/island1.jpg"
  },
  {
    name:"Island",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/island2.jpg"
  },
  {
    name:"Island",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/island3.jpg"
  },
  {
    name:"Island",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/island4.jpg"
  },
  {
    name:"Swamp",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/swamp1.jpg"
  },
  {
    name:"Swamp",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/swamp2.jpg"
  },
  {
    name:"Swamp",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/swamp3.jpg"
  },
  {
    name:"Swamp",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/swamp4.jpg"
  },
  {
    name:"Mountain",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/mountain1.jpg"
  },
  {
    name:"Mountain",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/mountain2.jpg"
  },
  {
    name:"Mountain",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/mountain3.jpg"
  },
  {
    name:"Mountain",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/mountain4.jpg"
  },
  {
    name:"Forest",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/forest1.jpg"
  },
  {
    name:"Forest",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/forest2.jpg"
  },
  {
    name:"Forest",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/forest3.jpg"
  },
  {
    name:"Forest",
    cost:["Null"],
    color:"colorless",
    rarity:"lcommon",
    rating: 0,
    source:"http://mythicspoiler.com/m19/cards/forest4.jpg"
  },
]
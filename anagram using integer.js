function anagrams(a, b) {
    if (a < 0 || b < 0) {
        return false; 
    }

    let count0A = 0, count1A = 0, count2A = 0, count3A = 0, count4A = 0,
        count5A = 0, count6A = 0, count7A = 0, count8A = 0, count9A = 0;

    let count0B = 0, count1B = 0, count2B = 0, count3B = 0, count4B = 0,
        count5B = 0, count6B = 0, count7B = 0, count8B = 0, count9B = 0;

    while (a > 0) {
        let digit = a % 10;
        switch (digit) {
            case 0:
                count0A++;
                break;
            case 1:
                count1A++;
                break;
            case 2:
                count2A++;
                break;
            case 3:
                count3A++;
                break;
            case 4:
                count4A++;
                break;
            case 5:
                count5A++;
                break;
            case 6:
                count6A++;
                break;
            case 7:
                count7A++;
                break;
            case 8:
                count8A++;
                break;
            case 9:
                count9A++;
                break;
        }
        a = (a / 10) | 0;
    }

    while (b > 0) {
        let digit = b % 10;
        switch (digit) {
            case 0:
                count0B++;
                break;
            case 1:
                count1B++;
                break;
            case 2:
                count2B++;
                break;
            case 3:
                count3B++;
                break;
            case 4:
                count4B++;
                break;
            case 5:
                count5B++;
                break;
            case 6:
                count6B++;
                break;
            case 7:
                count7B++;
                break;
            case 8:
                count8B++;
                break;
            case 9:
                count9B++;
                break;
        }
        b = (b / 10) | 0;
    }

    if (count0A === count0B && count1A === count1B && count2A === count2B &&
        count3A === count3B && count4A === count4B && count5A === count5B &&
        count6A === count6B && count7A === count7B && count8A === count8B &&
        count9A === count9B) {
        return true;
    }

    return false;
}
let a = 2469, b = 8426;

if (anagrams(a, b)) {
    console.log( +a+ " and "  +b+" both are anagrams");
} else {
    console.log( +a+  " and "  +b+" both are not anagrams");
}

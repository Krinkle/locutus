// Load Includes
// Include: Shell Requirement
load('/home/kevin/workspace/plutonia-phpjs/_helpers/env.js');
// Include: Shell Requirement
load('/home/kevin/workspace/plutonia-phpjs/_helpers/tester.js');

// Main source we want to test
load('/home/kevin/workspace/plutonia-phpjs/functions/array/array_change_key_case.js');

window.location = '/home/kevin/workspace/plutonia-phpjs/_helpers/tester.htm';
window.onload = function(){
    print('## SETS ##');
    // Execute Example Code
    returns = array_change_key_case(42);;    
    
    // Compare call return value
    success = tester_comparer(returns, false);
    print('> returns', success, tester_trim(tester_print_r(returns, true)));
    
    print('## RESULTS ##');
    print('## SETS ##');
    // Execute Example Code
    returns = array_change_key_case([ 3, 5 ]);;    
    
    // Compare call return value
    success = tester_comparer(returns, {0: 3, 1: 5});
    print('> returns', success, tester_trim(tester_print_r(returns, true)));
    
    print('## RESULTS ##');
    print('## SETS ##');
    // Execute Example Code
    returns = array_change_key_case({ FuBaR: 42 });;    
    
    // Compare call return value
    success = tester_comparer(returns, {"fubar": 42});
    print('> returns', success, tester_trim(tester_print_r(returns, true)));
    
    print('## RESULTS ##');
    print('## SETS ##');
    // Execute Example Code
    returns = array_change_key_case({ FuBaR: 42 }, 'CASE_LOWER');;    
    
    // Compare call return value
    success = tester_comparer(returns, {"fubar": 42});
    print('> returns', success, tester_trim(tester_print_r(returns, true)));
    
    print('## RESULTS ##');
    print('## SETS ##');
    // Execute Example Code
    returns = array_change_key_case({ FuBaR: 42 }, 'CASE_UPPER');;    
    
    // Compare call return value
    success = tester_comparer(returns, {"FUBAR": 42});
    print('> returns', success, tester_trim(tester_print_r(returns, true)));
    
    print('## RESULTS ##');
    print('## SETS ##');
    // Execute Example Code
    returns = array_change_key_case({ FuBaR: 42 }, 2);;    
    
    // Compare call return value
    success = tester_comparer(returns, {"FUBAR": 42});
    print('> returns', success, tester_trim(tester_print_r(returns, true)));
    
    print('## RESULTS ##');
}

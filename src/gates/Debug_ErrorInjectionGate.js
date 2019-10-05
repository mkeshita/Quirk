// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {DetailedError} from "src/base/DetailedError.js"
import {GateBuilder} from "src/circuit/Gate.js"
import {GatePainting} from "src/draw/GatePainting.js"

let ErrorInjectionGate = new GateBuilder().
    setSerializedId("__error__").
    setSymbol("ERR!").
    setTitle("Error Injection Gate").
    setBlurb("Throws an exception during circuit stat computations, for testing error paths.").
    setDrawer(GatePainting.MAKE_HIGHLIGHTED_DRAWER('red', 'red')).
    setActualEffectToUpdateFunc(ctx => {
        throw new DetailedError("Applied an Error Injection Gate",
            {qubit: ctx.row, recognition_code: '927, I am a potato'});
    }).
    promiseEffectIsStable().
    gate;

export {ErrorInjectionGate}

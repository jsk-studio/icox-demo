import { computed, unref } from 'vue'
import { mapState, mapGetters, mapActions, mapMutations, useStore } from 'vuex';

// function useMapFn(keys: any, mapFn: any){
//     //mapFn对应想使用的函数
//     const storeStateFns = mapFn(...keys)
//     const store = useStore()
//     const storeState = {} as any
//     const isMapData = [mapState, mapGetters].includes(mapFn)
//     Object.keys(storeStateFns).forEach(fnnKey=>{
//       const fn = storeStateFns[fnnKey].bind({ $store: store} )
//       storeState[fnnKey] = isMapData ? computed(fn) : fn
//     })
//     return storeState
// }

// export function useState(...keys: any[]){
//     return useMapFn(keys, mapState)
// }

// export function useActions(...keys: any[]){
//     return useMapFn(keys, mapActions)
// }

// export function useGetters(...keys: any[]){
//     return useMapFn(keys, mapGetters)
// }

// export function useMutations(...keys: any[]){
//     return useMapFn(keys, mapMutations)
// }

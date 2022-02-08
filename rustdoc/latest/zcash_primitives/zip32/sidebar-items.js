initSidebarItems({"constant":[["ZIP32_SAPLING_FVFP_PERSONALIZATION",""],["ZIP32_SAPLING_INT_PERSONALIZATION",""],["ZIP32_SAPLING_MASTER_PERSONALIZATION",""]],"enum":[["ChildIndex","A child index for a derived key"]],"fn":[["sapling_address","Attempt to produce a payment address given the specified diversifier index, and return None if the specified index does not produce a valid diversifier."],["sapling_default_address","Returns the payment address corresponding to the smallest valid diversifier index, along with that index."],["sapling_derive_internal_fvk","Returns the internal full viewing key and diversifier key for the provided external FVK = (ak, nk, ovk) and dk encoded in a Unified FVK."],["sapling_find_address","Search the diversifier space starting at diversifier index `j` for one which will produce a valid diversifier, and return the payment address constructed using that diversifier along with the index at which the valid diversifier was found."]],"mod":[["testing",""]],"struct":[["AccountId","A type-safe wrapper for account identifiers."],["ChainCode","A BIP-32 chain code"],["DiversifierIndex",""],["DiversifierKey","A key used to derive diversifiers for a particular child key"],["ExtendedFullViewingKey",""],["ExtendedSpendingKey","A Sapling extended spending key"]]});
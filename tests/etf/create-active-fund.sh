#!/bin/bash

defundd tx etf create-fund "ODD2" "The Odd 2" "If the block at the rebalance height is odd vs even swap between 75% vs 25% ATOM & OSMO." "osmo" "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2:75:osmosis:1:spot,uosmo:25:osmosis:1:spot" 25 5000000 --from joe --keyring-backend test --gas=10000000 --fees 10000000ufetf -y --active --cw-id 1 --chain-id defund
-include .env
-include .env.local

# check env
ifndef DEPLOY_HOST
$(error DEPLOY_HOST is not set. Please check your .env file)
endif

ifndef DEPLOY_PATH
$(error DEPLOY_PATH is not set. Please check your .env file)
endif

.PHONY: help build.h5 deploy deploy-safe

# ==================== 基础命令 ====================
help: ## 显示帮助 [基础命令]
	@echo ""
	@echo "⚙️ 基础命令:"
	@echo ""
	@awk -F ':.*?## ' '/\[基础命令\]/ && NF==2 {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""
	@echo "🚀 构建发布:"
	@echo ""
	@awk -F ':.*?## ' '/\[构建发布\]/ && NF==2 {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""
	

build.h5: ## 编译h5 [构建发布]
	@echo "\n🚀 开始编译..."
	pnpm run build:h5 
	@if [ $$? -ne 0 ]; then echo "🚫 编译失败"; exit 1; fi
	@echo "\n✅ 编译完成"

deploy: build.h5 ## 部署h5 [构建发布]
	@echo "\n📤 部署中..."
	rsync -avz --progress \
		--delete \
		--exclude='*.map' \
		--exclude='*.log' \
		--exclude='.DS_Store' \
		./dist/build/h5/ \
		$(DEPLOY_HOST):$(DEPLOY_PATH)/
	@if [ $$? -ne 0 ]; then echo "🚫 部署失败"; exit 1; fi
	@echo "\n🎉 部署完成 (๑•̀ㅂ•́)و✧"

deploy-safe: build.h5 ## 严格部署h5 [构建发布]
	@echo "\n📤 部署中..."
	rsync -avz --progress --delete \
		--exclude='*.map' \
		--exclude='*.log' \
		--exclude='.DS_Store' \
		--checksum \
		./dist/build/h5/ \
		$(DEPLOY_HOST):$(DEPLOY_PATH)/
	@if [ $$? -ne 0 ]; then echo "🚫 部署失败"; exit 1; fi
	@echo "\n🎉 部署完成"